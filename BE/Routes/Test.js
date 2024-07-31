const fs = require('fs');
const express = require('express')
const param = require('./../Controler/Test-Controler')
const http = require('http')
const router = express.Router()
router.use(express.json())
const tours = (fs.readFileSync('./dev-data/data/test_file.html'))
const get_method = (req,res) => {
 
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(tours)
}
const post_method = (req,res) =>{
    res.status(200).json({
        stats: 'success',
        data: {
        Result: 'Send success'
        }
    })
    console.log(req.body)
}


router
    
    .route('/')
    .get(get_method)
    .post(post_method)

module.exports = router

