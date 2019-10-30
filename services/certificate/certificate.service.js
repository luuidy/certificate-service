const Certificate = require('./certificateModel.js')

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
		get(ctx){
			return 'Ok'
		},
        create: {
			params: {
				name: {type: 'string', min: 2, max: 30},
				born: {type: 'string', min: 2, max:11},
				courseload: {type: 'number', min: 10, max: 100}
			},
			async handler(ctx){

				var id = Math.floor(Math.random() * 5000)
				var data = await Certificate.findOne({id_certificate: id})
				
				while (data) {
					 id = Math.floor(Math.random() * 5000)
					 data = await Certificate.findOne({id_certificate: id})	
					 if(data == null){
						 break
					 }else{
						 continue
					 }
				}

				try {
					const {name, born, course, courseload} = ctx.params
					const result  = await Certificate.create({
						id_certificate: id,
						name,
						born,
						course,
						courseload
					})
					return result
				} catch (error) {
					console.log(error)
					return 'Server Error'
				}
				
			}
		},
		
	   
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