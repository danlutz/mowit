module.exports = {
	"*.+(js|jsx|ts|tsx)": ["eslint --ext .js,.ts,.tsx --fix", "jest --bail --findRelatedTests"],
	"*.+(js|jsx|json|yml|yaml|html|css|less|scss|ts|tsx|md|mdx|graphql|vue|java|php)": [
		"prettier --write",
	],
}
