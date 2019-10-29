const connection  = require('./dbConnection.js')

const Certificate = new connection.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30
    },
    course: String,
    courseload: String,
    born: String,
})

module.exports = connection.model('certificate', Certificate)