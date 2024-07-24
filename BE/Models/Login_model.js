const { default: mongoose } = require("mongoose")




    
    const login_Model = mongoose.Schema({
        username: {
            type: String,
            require: [true,'Not have username'],
            unique: true
        },
        password: {
            type: String,
            // require: [true,'Not have password'],
            // unique: true
        }
    })
    const Login_Page = mongoose.model('Users',login_Model)


module.exports = Login_Page