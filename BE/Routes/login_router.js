const express = require('express')
const { default: mongoose } = require('mongoose')
const { DATABASE_URL } = require('./../Config/DB_Config')
const models = require('./../Models/Login_model')
const bcrypt = require('bcrypt')

const router = express.Router()
router.use(express.json())



const Login_check = (Post_Login, req, res) => {
  
    const is_Match = bcrypt.compareSync(req.body.password,Post_Login.password)
    if(Post_Login.username != req.body.username || !is_Match )
    {
       
        return res.status(403).json({
            stats: "Fail",
            data: {
                Result: 'Username and password incorrect! '
            }
        })
    }
    return res.status(201).json({
        stast: 'Success',
        data: {
            Result: 'Login success'
        }
    })
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