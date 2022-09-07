const express = require('express')
const mongoose  = require('mongoose')
const app = express()

try{
    mongoose.connect('mongodb+srv://srinath:srinath@cluster0.unt6k.mongodb.net/?retryWrites=true&w=majority')
}
catch(err){
    console.log(err)
}

mongoose.connect(url, {useNewUrlParser:true})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/aliens',alienRouter)
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})


const alienRouter = require('./routes/aliens')

app.listen(9000,(req,res)=>{
    console.log('server started')
})