const express = require('express')
const { default: mongoose } = require('mongoose')
const models = require('./../Models/Login_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('./../Config/JWT_Config')
const router = express.Router()
router.use(express.json())



const Login_check = async (Post_Login, req, res) => {
    
    const is_Match = bcrypt.compareSync(req.body.password,Post_Login.password)
   
    if(req.body.username === 'admin' && is_Match){
        const token = await jwt.sign({id: Post_Login._id}, config.JWT_SECRET, {
            expiresIn: config.JWT_EXPIRES_IN
           })
        return res.status(200).json({
            stats: "Success",
            data: {
                token: token,
                Result: 'This is admin! '
            }
        }) 
    }
    else if(Post_Login.username != req.body.username || !is_Match )
    {
       
        return res.status(403).json({
            stats: "Fail",
            data: {
                Result: 'Username and password incorrect! '
            }
        })
    }

    else{
        console.log(config.JWT_EXPIRES_IN)
       const token = await jwt.sign({id: Post_Login._id}, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRES_IN
       })
        return res.status(201).json({
            stast: 'Success',
            data: {
                token: token,
                Result: 'Login success'
            }
        })
    }
   
    }


    const post_method = async (req,res) =>{
    try{

        const Post_Login = await models.findOne({
            username: req.body.username,
        })
    
       Login_check(Post_Login, req, res)

    }catch(err)
    {
        console.log('error: ', err)
        return res.status(304).json({
            stats: "Fail",
            data: {
                Result: 'Username and password incorrect!'
            }
        })
    }
}




router
    .route('/')
    .post(post_method)

module.exports = router