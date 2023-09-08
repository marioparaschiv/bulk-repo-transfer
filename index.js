require('dotenv').config();

const { cli } = require('cleye');

const args = cli({
	name: 'bulk-repo-transfer',
	parameters: [
		'<oldOwner>',
		'<newOwner>'
	]
});

async function getRepos() {
	return await fetch(`https://api.github.com/users/${args._.oldOwner}/repos`, {
		headers: {
			'Accept': 'application/vnd.github+json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.GITHUB_SECRET}`
		}
	}).then(r => r.json());
}

async function transfer(repo) {
	try {
		const res = await fetch(`https://api.github.com/repos/${args._.oldOwner}/${repo}/transfer`, {
			method: 'POST',
			headers: {
				'Accept': 'application/vnd.github+json',
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.GITHUB_SECRET}`
			},
			body: JSON.stringify({ new_owner: args._.newOwner })
		});

		const text = await res.text();

		if (!res.ok) {
			throw new Error(text);
		}

		console.log(`Moved ${args._.oldOwner}/${repo} to ${args._.newOwner}/${repo}:\n`, text, '\n');
	} catch (e) {
		console.error(`Failed	to transfer ${args._.oldOwner}/${repo}.`, e);
	}
}

async function init() {
	const repos = await getRepos() ?? [];

	if (repos.documentation_url) {
		console.error('Encountered an error while fetching errors:', repos);
		process.exit(1);
	}

	if (repos.message === 'Bad credentials') {
		console.error('Invalid GitHub secret.');
		process.exit(1);
	}

	for (const repo of repos.map(r => r.name)) {
		try {
			await transfer(repo);
		} catch (e) {
			console.error('Failed to transfer ' + repo + ':', e);
		}
	}
}

init();