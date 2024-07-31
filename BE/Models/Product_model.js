const { default: mongoose } = require("mongoose")




    
    const login_Model = mongoose.Schema({

        // id: {
        //     type: Number,
        //     require: [true,'Must have id'],
        //     unique: true
        // },
        title: {
            type: String,
            require: [true,'Must have title'],
            unique: true
        },
        description: {
            type: String,
            require: [true,'Must have description'],
            unique: false
        },
        price: {
            type: Number,
            require: [true,'Must have price'],
            unique: false
        },
        imageUrl: {
            type: String,
            require: [true,'Must have imageUrl'],
            unique: false
        },
        hoverImageUrl: {
            type: String,
            require: [true,'Must have hoverImageUrl'],
            unique: false
        },
    })
    const Login_Page = mongoose.model('Products',login_Model)


module.exports = Login_Page

