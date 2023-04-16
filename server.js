require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')(session)
// const cookieParser = require('cookie-parser')

app.use(express.json())
//Database connection
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/Pizza',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

require('./routes/web')(app)

//session store
let mongoStore = new MongoDbStore({
  mongooseConnection : db,
  collection: 'sessions'
})
//global middleware
// app.use((req,res,next)=>{
//     res.locals.session = req.session
//     next()
// })
//session config
// app.use(cookieParser())
// app.use(express.cookieParser('your secret option here'));
app.use(session({
  secret: 'hemlo',
  // secret: process.env.SECRET,
  resave:false,
  store: mongoStore,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } //24
}))
app.use(flash())

//Assets
app.use(express.static('public'))
//set template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})