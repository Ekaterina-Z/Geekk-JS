
function addCart(id) {
    cart.addToCart(id);
};

function deleteItem(id) {
    cart.deleteFromBasket(id);
};

function viewCart() {
   cart.render();
};
function loadBut() {
    const element = event.target;
    const src = element.getAttribute('data-load');
    list.fetchProducts(src);
}
function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(callback(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

class ProductItem {
    constructor(id, prod_image, name, price, currency) {
        this.id = id;
        this.prod_image = prod_image;
        this.name = name;
        this.price = price;
        this.currency = currency;
    }
    render() {
          return      `<div class="product" id="${this.id}">
                        <a href="#">
                        <img class="product__img" src="${this.prod_image}" alt="img" />
                        </a>
                        <div class="product__content">
                        <a href="#" class="product__name">${this.name}</a>
                        <div class="product__price"> ${this.price}  ${this.currency} </div> 
                        </div>
                        <button class="product__add" onclick="addCart(${this.id})">Add to Cart</button>
                    </div>
                    </div>`;
    }

}

class  ProductsList {
    constructor(container = '.product-box') {
        this.container = container;
        this.products = [];
        this.allProducts =[];
    }

    fetchProducts(url) {
        makeGETRequest(url, (product) => {
            this.products = JSON.parse(product);
            this.render();
        })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productItem = new ProductItem(product.id, product.prod_image, product.name, product.price, product.currency);
            this.allProducts.push(productItem);
            block.insertAdjacentHTML('afterbegin', productItem.render());
        }
    }

}
class CartProduct {
    constructor(id, prod_image, name, price, currency) {
        this.id = id;
        this.prod_image = prod_image;
        this.name = name;
        this.price = price;
        this.currency = currency;
    }
    render () {
        return ` <div class="header__right_cart_box1" id="${this.id}">
                    <a  class="header__right_cart_img"
                    ><img src="${this.prod_image}"
                    /></a>
                    <div class="header__right_cart_content">
                        <h3>${this.name}</h3>
                        <br />
                        <p>1   <span>x</span>${this.currency} ${this.price}</p>
                    </div>
                    <button class="header__right_cart_close"  onclick='deleteItem(${this.id})'><p>&#9421;</p></button>
                </div>`
    }

}

class Cart {
    constructor(container = '.header__right_cart') {
        this.container =container;
        this.cartProducts =[];
    }
    addToCart(id) {
        let toCart;
        list.products.forEach( function (item) {
            if(id == item.id) {
                toCart = {
                    id: item.id,
                    prod_image: item.prod_image,
                    name: item.name,
                    price: item.price,
                    currency:item.currency
                }
            }
        });
        this.cartProducts.push(toCart);
    }
    deleteFromBasket(id) {
        let getIdElemen;
        this.cartProducts.forEach(function(item, i) {
            let thisId = item.id;
            if(id == thisId) {
                getIdElemen = i;
            }

        });
        this.cartProducts.splice(getIdElemen, 1);
        this.render();
    }
    render() {
        let readHtml = '';
        this.cartProducts.forEach((product) => {
            const productItem = new CartProduct(product.id, product.prod_image, product.name, product.price, product.currency);
            readHtml += productItem.render();
        })
        document.querySelector('.header__right_cart').innerHTML = readHtml;
    }

}

document.getElementById('cartButton').addEventListener("click", hiddenCloseСlick);
function hiddenCloseСlick() {
    let element = document.getElementById('productCart');
    if (element.style.display == "none"){
        element.style.display = "block";
    } else {
        element.style.display = "none"}
}
//
//      document.getElementById('cartButton').addEventListener('click', () => {
//      document.querySelector('.header__right_cart').classList.toggle('invisible');
//  });

const list = new ProductsList();
const cart = new Cart();
list.fetchProducts('Products.json');