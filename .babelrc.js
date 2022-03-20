const env = require('./env-config');

module.exports = {
	"presets": ["next/babel"],
	"plugins": [
		["@babel/plugin-transform-runtime"],
		["styled-components", { "ssr": true }],
		["transform-define", env]
	]
};
