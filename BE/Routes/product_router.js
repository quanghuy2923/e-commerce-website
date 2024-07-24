const express = require('express')
const { default: mongoose } = require('mongoose')
const model = require('./../Models/Product_model')
const couter_model = require('./../Models/Couter_model')
const router = express.Router()
router.use(express.json())

const get_method = async (req,res) => {
    try{
        
        const get_all_product = await model.find()
            res.status(201).json({
                stats: 'Call Success',
                data:{
                    get_all_product
                }
            })

    }catch(err){
        console.log(err)
    }

}

const post_method = async (req,res) => {
    const id = await couter_model.find()
    console.log(req.body, '     ',id.number)
    try{
        const post_product = await model.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            hoverImageUrl: req.body.hoverImageUrl,
        } )
        return res.status(201).json({
            stast: 'Success',
            data: {
                Result: 'Post product success'
            }
        })
    }catch(err){
        console.log(err)
        return res.status(304).json({
            stats: "Fail",
            data: {
                Result: 'Post product unsuccess!'
            }
        })
    }
}

router
    .route('/')
    .get(get_method)
    .post(post_method)
module.exports = router