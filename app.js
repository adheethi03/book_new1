const express=require("express")
const app=express()
const bookRouter=require("./Router/bookRouter")
app.use('/books',bookRouter)
app.listen(4000,()=>
{
    console.log("sever started....")
})