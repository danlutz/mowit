const runYarnLock = "yarn install --frozen-lockfile"

module.exports = {
	hooks: {
		"post-checkout": `if [[ $HUSKY_GIT_PARAMS =~ 1$ ]]; then ${runYarnLock}; fi`,
		"post-merge": runYarnLock,
		"post-rebase": "yarn install",
		"pre-commit":
			"lerna run --concurrency 1 --stream precommit --since HEAD --exclude-dependents",
		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
	},
}
