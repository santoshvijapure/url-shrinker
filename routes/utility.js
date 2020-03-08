var express = require("express")
var router = express.Router();
const ShortUrl = require('../models/shortUrl')


//find all
router.get("/all",(req,res)=>{
    ShortUrl.find({},(err,data)=>{
      if (err) {
        res.send(err);
      } else {
        res.json(data)
      }
    })
  })
  //find by hash
router.get('/one/:id', (req, res) => {
    ShortUrl.findOne({short : req.params.id},(err,data)=>{
      if (err) {
        res.send(err);
      } else {
        res.json(data)
      }
    })
  });
  //delete by hash
router.get('/remove/:id', (req, res) => {
    ShortUrl.findOneAndDelete({short:req.params.id},(err)=>{
      if(err){
        res.send({code: 404,messege:"please enter the valid hash "});
      }else{
        res.json({code:200,messege : "successfully deleted the URL with the hash  "+req.params.id});
      }
    })
  });
  
  


module.exports=router;