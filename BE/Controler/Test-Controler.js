exports.param_test =  (req,res,next) => {
    console.log('hello\n' + req.body )
    if(!req.body || Object.keys(req.body).length === 0)
        return res.status(404).json({
            stas: 'not success',
            data: {
                Result: 'Not have body'
            }
    
        })
    next()
}