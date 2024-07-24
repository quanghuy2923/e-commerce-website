const { default: mongoose } = require("mongoose")


    const Couter_Model = mongoose.Schema({
        number: {
            type: Number,
            require: [true,'Not have username'],
            unique: true
        },
    })
    const Couter_Page = mongoose.model('Couters',Couter_Model)


module.exports = Couter_Page