
const homeController =require('../app/http/controllers/homeController')
const authController=require('../app/http/controllers/authController')
const menuController=require('../app/http/controllers/menuController')
const cartController=require('../app/http/controllers/customers/cartController')
function initRoutes(app){
    
    app.get('/',homeController().index)
    app.get('/menu',menuController().index)
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
    app.get('/cart',cartController().index)
    app.get('/login',authController().login)
    app.get('/register',authController().register)
    app.post('/update-cart',cartController().update)
}


module.exports = initRoutes