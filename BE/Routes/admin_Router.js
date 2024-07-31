const express = require('express')
const { default: mongoose } = require("mongoose")
const model_Login = require('./../Models/Login_model')
const model = require('./../Models/Product_model')
const url = require('url')


const router = express.Router()
router.use(express.json())

const get_all = async (req, res) => {
     try{
        const  get_all_user_json = await model_Login.find().select('username')
        
        const get_all_product_json = await model.find()
        return res.status(200).json({
            stats: 'Success',
            data: {
                get_all_user_json,
                get_all_product_json,
                Result: 'Get API success'
            }
        })
        }
    catch(err)  
    {
        console.log(err)
        return res.status(400).json({
            stats: 'Fail',
            data: {
                Result: 'Get API Fail'
            }
        })
    } 
        
}
const get_all_User = async (req, res) => {
    try{
        const  get_all_user_json = await model_Login.find().select('username')
        return res.status(200).json({
            stats: 'Success',
            data: {
                get_all_user_json,
                get_all_product_json,
                Result: 'Get API success'
            }
        })
        }
    catch(err)  
    {
        console.log(err)
        return res.status(400).json({
            stats: 'Fail',
            data: {
                Result: 'Get API Fail'
            }
        })
    } 
}
const delete_User = async (req, res) => {
 const id = req.params.id 
}
const get_all_Product = async (req, res) => {

}
const delete_Product = async (req, res) => {

}
const update_Product = async (req, res) => {

}
router
.route('/')
.get(get_all)

router
.route('/user')
.get(get_all_User)
router
.route('/user/:id')
.delete(delete_User)

router
.route('/product')
.get(get_all_Product)
router
.route('/product/:id')
.delete(delete_Product)
.patch(update_Product)


module.exports = router