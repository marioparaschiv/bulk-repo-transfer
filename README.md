---

<div align="center">
  <h3>➡️ Bulk Repo Transfer</h3>
  <p>Transfer repos from one owner to another.</p>
</div>

---


## Notes
This script is limited to 100 repos at once. This is due to a GitHub limit, however, you may run the script again to move more than 100 repositories at once.

**You must rename .env.sample to .env and place add GitHub Personal Access Token**

## Requirements
- [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/en)
- GitHub Personal Access Token

## Setup
- **Cookies** - You may find this under the "Network" tab when making a request such as creating or deleting a session. It will be in the request headers.
- **Dojo ID** - You may find this in the URL bar of your scheduler
- **Schedule** - This has to be configured to reflect your Dojo's schedule. The fields in the sample configuration are self explanatory.

## Usage
- `bun . oldOwner newOwner` 
- `node . oldOwner newOwner`

## Licensing
See [LICENSE](/LICENSE).
