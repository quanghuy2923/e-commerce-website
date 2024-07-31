const express = require('express')
const { default: mongoose } = require('mongoose')
const model = require('./../Models/Product_model')
const config = require('./../Config/JWT_Config')
const jwt = require('jsonwebtoken')
const router = express.Router()
router.use(express.json())

const get_method = async (req,res) => {
    try{
     
        const verify = await jwt.verify(req.body.token,config.JWT_SECRET)
       
        if(verify)
        {
            const get_all_product = await model.find()
            res.status(201).json({
                stats: 'Call Success',
                data:{
                    get_all_product
                }
            })

        }
       
    }catch(err){
        
      if(err.name === 'JsonWebTokenError')
      {
        res.status(401).json({
            stats: 'Call Fail',
                data:{
                    Result: 'Undefine token. Are you log in ?'
                }
        })
      }
    }

}

const post_method = async (req,res) => {
    const verify = await jwt.verify(req.body.token,config.JWT_SECRET)
    if(verify.id = '66a9d313d9e946c34fc74185')
        try{
            const post_product = await model.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                imageUrl: req.body.imageUrl,
                hoverImageUrl: req.body.hoverImageUrl,
            })
            return res.status(201).json({
                stast: 'Success',
                data: {
                    Result: 'Post product success'
                }
            })
        }catch(err){
            if(err.name === 'MongoServerError')
                  res.status(404).json({
                      stats: 'Call Fail',
                          data:{
                              Result: 'Cann`t save to server. Check the connection at the server or check the duplicate title (Server can`t connect with duplicate title)'
                          }
                  })
            else 
            {
                console.log(err) 
                return res.status(401).json({
                stats: 'Call Fail',
                    data:{
                        Result: 'Error:'+ err
                    }
            })
            }
        }

    else 
      return res.status(401).json({
            stats: 'Call Fail',
                data:{
                    Result: 'You haven`t permission to do this'
                }
        })    
}

router
    .route('/')
    .get(get_method)
    .post(post_method)
module.exports = router