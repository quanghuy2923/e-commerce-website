const { default: mongoose } = require("mongoose");
const express = require('express')
const model = require('./../Models/Register_model')
const bcrypt = require('bcrypt');

const router = express.Router()
router.use(express.json())

const encodePassword = async (password) => {
    const saltRounds = 10
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds)
      return hashedPassword;
    } catch (error) {
      console.error('Error encoding password:', error)
      throw error
    }
}

const post_method = async (req,res) => {
    
    const encode = await encodePassword(req.body.password)
    console.log(encode)

try
{
console.log(req.body.password)
const Register_json = await model.create({

    username: req.body.username,
    password: encode,
})
return res.status(201).json({
    stast: 'Success',
    data: {
        Result: 'Register success'
    }
})
}catch(err) {
    console.log(err)
    return res.status(304).json({
        stats: "Fail",
        data: {
            Result: 'Register unsuccess!'
        }
    })}


}

router
    .route('/')
    .post(post_method)


module.exports = router
