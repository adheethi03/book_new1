const express =require('express')
const router = express.Router()
const book=require('../bookList')
router.get('/',(req,res)=> {
    try{
        res.status(200).json(book)
 }catch(error)
 {
    res.status(404).json({error:" not found"})
 }   
})

module.exports=router