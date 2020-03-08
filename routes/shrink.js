var express = require("express")
var router = express.Router();
var shortId = require("shortid")
const ShortUrl = require('../models/shortUrl')


//post the new URL with hash
router.post('/shrink', async (req, res) => {

    while (true) {
      console.log(req.body)
      shrt=shortId.generate().slice(0,6)
      console.log(shrt)
      const shortUrl = await ShortUrl.findOne({ short: shrt })
      if(shortUrl===null){
        await ShortUrl.create({ full: req.body.fullUrl ,short: shrt},(err,data)=>{
          if (err) {
            res.send(err);
          } else {
          res.json(data);
          }
        });
        break;
      }
    }
    })

module.exports=router;