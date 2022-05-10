const express = require('express')
const app = express()
const userrouter = require('./router/emprouter')

require("./model/index")

app.use(express.json())
app.use("/",userrouter)

app.listen(3500,()=>{
    console.log("server starting in port no 3500");
})