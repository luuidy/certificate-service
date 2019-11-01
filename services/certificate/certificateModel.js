const connection  = require('./dbConnection.js')

const Certificate = new connection.Schema({
    id_certificate: Number,
    name: {
        type: String,
        minlength: 2,
        maxlength: 30
    },
    email: String,
    born: String,
    course: String,
})

module.exports = connection.model('certificate', Certificate)