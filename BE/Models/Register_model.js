const { default: mongoose } = require("mongoose")




    
    const Register_Model = mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Must have username!'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Must have Password!'],
            unique: true
        }
    })
    const Register_Page = mongoose.model('users',Register_Model)


module.exports = Register_Page