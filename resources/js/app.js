import axios from 'axios'
import Noty from 'noty'
let cartCounter = document.querySelector('#cartCounter')
var addToCart = document.querySelectorAll('.add-to-cart')
console.log(addToCart)
function updateCart(pizza) {
     axios.post('/update-cart',pizza).then(res=>{
        console.log(res)
        cartCounter.innerText = res.data.totalQty
        new Noty({
            text:'Item added to cart'
        }).show();
     })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        console.log("Clicked")
    })
})



