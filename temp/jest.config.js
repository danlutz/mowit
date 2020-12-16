const { defaults } = require("jest-config")

module.exports = {
	...defaults,
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
}
