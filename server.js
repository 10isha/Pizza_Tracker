const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const path = require('path')


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/menu',(req,res)=>{
    res.render('menu')
})
app.get('/services',(req,res)=>{
    res.render('services')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/blog-single',(req,res)=>{
    res.render('blog-single')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/cart',(req,res)=>{
    res.render('cart')
})
app.get('/login',(req,res)=>{
    res.render('auth/login')
})
app.get('/register',(req,res)=>{
    res.render('auth/register')
})
//Assets
app.use(express.static('public'))
//set template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})