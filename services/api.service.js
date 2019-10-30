const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			path: "/api",
			whitelist: [
				"**"
			],
			
			aliases: {
				//create certification
				"POST certificate": "certificate.create",
				"GET certificate/:id": "certificate.get"
			}
		}],
	}
};
