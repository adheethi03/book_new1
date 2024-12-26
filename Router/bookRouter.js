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
router.get('/:id',(req,res)=>
{
    try{
        const booksid=parseInt(req.params.id)
        const bk= book.find(bookid=>bookid.id===booksid)
        if(!bk)
        {
            res.status(404).json({error:" details not found"})
        }
        res.status(200).json(bk)
    }
    catch(error)
    {

    }
})
module.exports=router