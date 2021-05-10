class Products {
    async  getProducts() {
        try {
            var response = await fetch('./products.json')
            var result = await response.json()
            var products = result.items
            products = products.map(item => {
                // return {
                //     id: item.sys.id,
                //     title: item.fields.title,
                //     price: item.fields.price,
                //     image: item.fields.image.fields.file.url
                // }
                const { id } = item.sys
                const { title, price } = item.fields
                const image = item.fields.image.fields.file.url
                return { id, title, price, image }
            })
            return products
        } catch (error) {
            console.log('handled error '+error)
        }
    }
}



var cart = []
// var buttonsDOM = []

class UI {
    constructor(variables) {
        this.section1Grid = variables._section1Grid
        this.cartItems = variables._cartItems
        this.cartTotal = variables._cartTotal
        this.cartItemWrapper = variables._cartItemWrapper
        this.overlay = variables._overlay
        this.cartBtn = variables._cartBtn
        this.hideBtn = variables._hideBtn
        this.opHandler = variables._opHandler
        this.clearBtn = variables._clearBtn
    }
    displalyProducts(products) {
        var result = '';
        products.forEach(product => {
            result += `
                <article>
                    <div class='img-wrapper'>
                        <img src="${product.image}" alt="">
                        <button class='product-btn' data-id='${product.id}'>
                            <i class='fas fa-shopping-cart'></i>
                            add to bag
                        </button>
                    </div>
                    <h3 class='product-title'>${product.title}</h3>
                    <h4 class='product-price'>${product.price}</h4>
                </article>
                `
        })
        this.section1Grid.innerHTML = result
    }
    getBagBtns() {
        this.savedBtns = [...document.querySelectorAll('.product-btn')]        
        // var buttons = document.querySelectorAll('.product-btn')
        this.savedBtns.forEach(button => {
            var id = button.dataset.id
            var inCart = cart.find(item => item.id == id)
            if (inCart) {
                button.innerText = 'in cart'
                button.disabled = true
            }
            button.addEventListener('click', (event) => {
                event.target.innerText = 'in cart'
                event.target.disabled = true
                var cartItem = { ...Storage.getProducts(id), amount: 1 }
                cart = [...cart, cartItem]
                Storage.setCart(cart)
                this.setCartValues(cart)
                this.addCartItem(cartItem)
                this.showCart()
            })
        })
    }
    setCartValues(cart) {
        var tempTotal = 0;
        var itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        this.cartItems.innerText = itemsTotal
        this.cartTotal.innerText = parseFloat(tempTotal.toFixed('2'))
    }
    addCartItem(cartItem) {
        var content = `
            <div class="cart-item">
                <img style='width: 100px;height: 100px' src="${cartItem.image}" alt="">
                <div class="infoWrapper">
                    <h4>b${cartItem.title}</h4>
                    <h5>${cartItem.price}</h5>
                    <span class='removeItem' data-id='${cartItem.id}'>remove</span>
                </div>
                <div class="amount">
                    <i class="fas fa-sort-up" data-id = ${cartItem.id}></i>
                    <p>1</p>
                    <i class="fas fa-sort-down" data-id = ${cartItem.id}></i>
                </div>
            </div>
            `
        this.cartItemWrapper.innerHTML += content
    }
    showCart() {
        this.overlay.classList.add('showCart')
        this.opHandler.classList.add('opacity')
    }
    hideCart() {
        this.overlay.classList.remove('showCart')
        this.opHandler.classList.remove('opacity')
    }
    setupAPP() {
        cart = Storage.getCart()
        this.setCartValues(cart)
        this.populateCart(cart)
        this.cartBtn.addEventListener('click', () => {
            this.showCart()
        })
        this.hideBtn.addEventListener('click', () => {
            this.hideCart()
        })
    }
    populateCart(cart) {
        cart.forEach(item => {
            this.addCartItem(item)
        })
    }
    clearLogic() {
        this.clearBtn.addEventListener('click', () => {
            this.clearCart()
        })
        this.cartItemWrapper.addEventListener('click', (e) => {
            if (e.target.classList.contains('removeItem')) {
                var id = e.target.dataset.id
                this.cartItemWrapper.removeChild(e.target.parentElement.parentElement)
                this.removeItem(id)
            } else if (e.target.classList.contains('fa-sort-up')) {
                var id = e.target.dataset.id
                var tempItem = cart.find(item => item.id == id)
                tempItem.amount++
                e.target.nextElementSibling.innerHTML = tempItem.amount
                this.setCartValues(cart)
                Storage.setCart(cart)
            } else if (e.target.classList.contains('fa-sort-down')) {
                var id = e.target.dataset.id
                var tempItem = cart.find(item => item.id == id)
                tempItem.amount--
                if (tempItem.amount > 0) {
                    this.setCartValues(cart)
                    Storage.setCart(cart)
                    e.target.previousElementSibling.innerHTML = tempItem.amount
                } else {
                    this.cartItemWrapper.removeChild(e.target.parentElement.parentElement)
                    this.removeItem(id)
                }
            }
        })
    }
    clearCart() {
        var ids = cart.map(item => item.id)
        ids.forEach(id => this.removeItem(id))
        while (this.cartItemWrapper.children.length > 0) {
            this.cartItemWrapper.removeChild(this.cartItemWrapper.children[0])
        }
        this.hideCart()
    }
    removeItem(id) {
        cart = cart.filter(item => item.id !== id)
        this.setCartValues(cart)
        Storage.setCart(cart)
        var button = this.resetBtn(id)
        button.disabled = false
        button.innerHTML = `
            <i class='fas fa-shopping-cart'></i>
            add to bag
            `
    }
    resetBtn(id) {
        return this.savedBtns.find(btn => btn.dataset.id == id)
    }
}


class Storage {
    static setProducts(products) {
        localStorage.setItem('products', JSON.stringify(products))
    }
    static getProducts(id) {
        var products = JSON.parse(localStorage.getItem('products'))
        return products.find(product => product.id === id)
    }
    static setCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    static getCart() {
        var data = localStorage.getItem('cart')
        return data ? JSON.parse(data) : []
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var variables = {
        _section1Grid: document.querySelector('.section-1_grid'),
        _cartItems: document.querySelector('.cartItems'),
        _cartTotal: document.querySelector('.cartTotal'),
        _cartItemWrapper: document.querySelector('.cart-Item_Wrapper'),
        _overlay: document.querySelector('.overlay'),
        _cartBtn: document.querySelector('.cartBtn'),
        _hideBtn: document.querySelector('.hideBtn'),
        _opHandler: document.querySelector('.opHandler'),
        _clearBtn: document.querySelector('.clearBtn')
    }

    var products = new Products()
    var ui = new UI(variables)
    ui.setupAPP()
    products.getProducts().then(products => {
        console.log(products)
        ui.displalyProducts(products)
        Storage.setProducts(products)
    }).then(() => {
        ui.getBagBtns()
        ui.clearLogic()
    })

})



