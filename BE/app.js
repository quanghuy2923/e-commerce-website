const express = require('express')
const test = require('./Routes/Test')
const { STATUS_CODES } = require('http')
const cors = require('cors')
const morgan = require('morgan')
const login = require('./Routes/login_router')
const { DATABASE_URL } = require('./Config/DB_Config')
const { default: mongoose } = require('mongoose')
const  register = require('./Routes/register_router')



mongoose.connect(DATABASE_URL)
        .then(console.log('Database connect success!'))
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/',test)
app.use('/login', login)
app.use('/register',register)



app.listen(8000,() => {

    console.log('App running on port 8000!')
})