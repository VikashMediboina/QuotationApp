const express=require("express")
var bodyParser = require('body-parser')
const catgories_router = require("./routes/catgories")
const company_router = require("./routes/company")
const line_router = require("./routes/line")
const main_items_router = require("./routes/main_items")
const quotation_router = require("./routes/quotation")
const user_router = require("./routes/user")
const errorHandler = require("./middleware/error_handler")
const { validationErrorMiddleware } = require("./middleware/validation_error_handler")
const { cache_details } = require("./constants/cache_details")
const customer_router = require("./routes/customer")


const app=express()
app.use(bodyParser.json())
// app.use(cors)
app.get("/",(req,res,next)=>{
    res.send("This is Test Page")
})


app.use('/user/',user_router)
app.use('/mainitems/',main_items_router)
app.use('/lineitems/',line_router)
app.use('/catgories/',catgories_router)
app.use('/quotation/',quotation_router)
app.use('/company/',company_router)
app.use('/customer/',customer_router)


app.get("/cache",(req,res,next)=>{
    res.json(cache_details)
})

app.use(validationErrorMiddleware);
app.use(errorHandler)


app.listen((5001),()=>{
    console.log("Server is Running")
})