module.exports = {
    name: "certificate",

	/**
	 * Service settings
	 */
    settings: {

    },

	/**
	 * Service dependencies
	 */
    dependencies: [],

	/**
	 * Actions
	 */
    actions: {
        create: {
			params: {
				name: {type: 'string', min: 2, max: 30},
				born: {type: 'string', min: 2, max:11},
				courseload: {type: 'number', min: 10, max: 100}
			},

			handler(ctx){
				return ctx.params
			}
		}
    },

	/**
	 * Events
	 */
    events: {

    },

	/**
	 * Methods
	 */
    methods: {

    },

	/**
	 * Service created lifecycle event handler
	 */
    created() {

    },

	/**
	 * Service started lifecycle event handler
	 */
    started() {

    },

	/**
	 * Service stopped lifecycle event handler
	 */
    stopped() {

    }
};