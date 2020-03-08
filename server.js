const express = require('express')
const app = express()
var bodyParser=require("body-parser")
const ShortUrl = require('./models/shortUrl')

const shortId = require('shortid')
shortId.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-")

//mongoose setup

const mongoose = require('mongoose')
var mongoURL=require("./config/config").mongoUrl

mongoose.connect(mongoURL, {
   useUnifiedTopology: true,
   useNewUrlParser: true 
},(err)=>{
  if (err) {
    console.log('err', err)
  } else {  
    console.log('connected to MongoDB server')
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-headers","Origin,X-Requested-with,Content-Type,Accept")
  next()
})

//root route
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

var shrink=require("./routes/shrink")
app.use(shrink)

var utility=require("./routes/utility")
app.use(utility)


//reduirection the shortlink to full link
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.json({statusCode: 404, messege : "opse link not found or link is expired!!!"})
  shortUrl.clicks++
  shortUrl.save()
  res.redirect(shortUrl.full)  
})


PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
  console.log("server started at port : " + PORT )
});

