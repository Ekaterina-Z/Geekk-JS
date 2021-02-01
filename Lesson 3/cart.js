// const API = 'https://github.com/Ekaterina-Z/Geekk-JS/tree/master/Lesson%203/';


// function makeGETRequest(url, callback) {
//     return new Promise((resolve, reject) => {
//         let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
//         xhr.open("GET", url, true);
//         xhr.onload = () => resolve(callback(xhr.responseText));
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// }

class Product {
    constructor(id, prod_image, price, name, currency) {
        this.id = product.id;
        this.prod_image = product.prod_image;
        this.price = product.price;
        this.name = product.name;
        this.id = product.id;
        this.currency = product.currency;
    }
}
class CatalogProduct extends Product {
    constructor(id, prod_image, price, name, currency) {
        super(id, prod_image, price, name, currency);
    };
    render(i, container, source) {
        let catalog = document.querySelector(container);
        catalog. insertAdjacentHTML ( 'beforeend',
            ` <div class="center product-box">
                    <div class="product" id="${source[i].id}">
                        <a href="#">
                        <img class="product__img" src="${source[i].prod_image}" alt="img" />
                        </a>
                        <div class="product__content">
                              <a href="#" class="product__name">${source[i].name}</a>
                             <div class="product__price"> ${source[i].price} \u20bd </div> 
                             </div>
                        <button class="product__add" onclick="addToCart()">Add to Cart</button>
                        </div>
                   </div>
                   </div>`);
        return catalog;
    }
}
class ControlBlock {
    renderCatalog(data) {
        catalog.render(data);
    };
    totalInfoInstanceInit(data, container) {
        totalInfoInstance.init(data, container);
    };
    dropBasket() {
        cart.dropBasket();
    };
}
class CartProduct extends Product{
    constructor(id, prod_image, price, name, currency) {
        super(id, prod_image, price, name, currency);
    };
    render(i,container, source) {
        let cart =document.querySelector('header__right_cart');
        cart.insertAdjacentHTML ('beforeend',
            `<div class="header__right_cart_box1" id="${source[i].id}">
                    <a  class="header__right_cart_img" href="#">
                    <img src = "${source[i].prod_image}" alt="img"/> </a>
                    <div class="header__right_cart_content">
                        <h3>${source[i].name}</h3>
                        <br />
                        <p>1   <span>x</span> ${source[i].price}</p>
                    </div>
                    <button class="header__right_cart_close" id ="delProduct${source[i].id}"><p>&#9421;</p></button>
                </div>`);
                return cart;
    };
    btnRemoveFromCart (i)
                    {
                        let deletButtonCart = document.querySelector ('#delProduct${cart.productInCart[i].id}')
                        deletButtonCart.addEventListener('click', () => {
                            cart.productInCart.splice(i,1);
                            cart.reloadCart();
                        })
                    };
}
class CartList {
    constructor(container = 'header__right_cart') {
        this.container = container;
        this.productsInCart = [];
        this.init()
    };
    init() {
        if (this.productsInCart.length !==0) {
            this.productsInCart.forEach((item,i) => {
                const productInCart = new CartProduct(item.name, item.prod_image, item.price, item.id, item.currency);
                productInCart.render(i,this.container, this.productsInCart);
                productInCart.btnRemoveFromCart(i);
            })
        }
    };
    dropCart(){
        this.productsInCart.splice(0);
        this.reloadCart();
    };
    reloadCart() {
        this.clearCart();
        this.init(this.container);
    };

    clearCart (){
        let el = document.querySelector(this.container);
        el.innerHTML = ``;
    };
}

class  ProductsList {
    constructor(container = '.product-box', api = 'https://github.com/Ekaterina-Z/Geekk-JS/tree/master/Lesson%203/') {
        this.container = container;
        this.API =api;
        // this.products = [];
        this.getProducts().then((data) => {
            this.products = [...data];
            this.render();
        });
    }

    getProducts() {
        return  fetch(`${this.API}Products.json`,{
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Content-Type",
                'Content-Type': 'application/json'
            }})
            .then((response) => response.json())
            .catch((error)=> {
                console.log(error);
            });
    }

    render(data) {
        data.forEach((item, i) => {
            const productInList = new CatalogProduct(item.name, item.prod_image, item.currency, item.price,item.id);
            productInList.render(i, this.container, data);
        });
    };
    clearCatalog() {
        let catalog = document.querySelector(this.container);
        catalog.innerHTML = '';
    };

    // totalSumm(result) {
    //     document.querySelector('.price').innerHTML = result;
    //     return this.products.reduce((sum, {price}) => sum + price, 0);
    // }
}





document.getElementById('cartButton').addEventListener("click", hiddenCloseСlick);
function hiddenCloseСlick() {
    let element = document.getElementById('productCart');
    if (element.style.display == "none"){
        element.style.display = "block";
    } else {
        element.style.display = "none"}
}

const catalog = new ProductsList();
const cart = new CartList();




