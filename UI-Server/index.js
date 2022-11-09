const express=require("express")
var bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path');

const app=express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join("../quotation_ui/", 'build')));

app.get("*",(req,res,next)=>{
    res.sendFile(path.join("../quotation_ui/", 'build', 'index.html'));
})


app.listen((3000),()=>{
    console.log("Server is Running")
})