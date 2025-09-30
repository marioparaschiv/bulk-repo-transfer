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

## Usage
- `bun . oldOwner newOwner` 
- `node . oldOwner newOwner`

## Licensing
See [LICENSE](/LICENSE).
