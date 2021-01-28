

class  ProductsList  {
    constructor(container ='.product-box') {
        this.container = container;
        this.products = [];
        this.allProducts =[];
        this.fetchProducts();
        this.render();

    }
    fetchProducts() {
        this.products = [
            {
                id: 1,
                name: 'Mango People T-shirt',
                price: 40,
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-1.png',
                currency: '$',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 2,
                name: 'Mango People T-shirt',
                price: 50,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-2.png',
                //*.../img/product/product-2.png - почему не работает оносительный путь до файла с картинкой *//

                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 3,
                name: 'Mango People T-shirt',
                price: 100,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-3.png',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 4,
                name: 'Mango People T-shirt',
                price: 60,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-4.png',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 5,
                name: 'Mango People T-shirt',
                price: 35,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-5.png',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 6,
                name: 'Mango People T-shirt',
                price: 45,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-6.png',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 7,
                name: 'Mango People T-shirt',
                price: 20,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-7.png',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
            {
                id: 8,
                name: 'Mango People T-shirt',
                price: 30,
                currency: '$',
                prod_image: 'http://localhost:63342/GekkProject/img/product/product-8.png',
                desiner: 'Pavel',
                color: 'red',
                description: 'Compellingly actualize fully researched processes before proactivtt.',
                size: 'XXL',
                availebel: true
            },
        ]
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productItem = new ProductItem(product.id, product.prod_image, product.name, product.price, product.currency);
            this.allProducts.push(productItem);
            block.insertAdjacentHTML('afterbegin', productItem.render());
        }
    }

    totalSumm() {
        let totalPrice = 0;
        this.allProducts.forEach((product) => {
            if(product.price !== undefined) {
                totalPrice += product.price;
            }
        });
        let totalProductsAnswer = "Всего товаров на сумму $" + totalPrice;
        document.querySelector('.price').innerHTML = totalProductsAnswer;
    }

}


class ProductItem  {
    constructor(id, prod_image, name, price,  currency) {
        this.id = id;
        this.prod_image = prod_image;
        this.name = name;
        this.price= price;
        this.currency = currency;
    }
    render() {
        return `
        <div class="product" id="${this.id}">
                <a href="#">
                <img class="product__img" src="${this.prod_image}" alt="img" />
                </a>
                <div class="product__content">
                      <a href="#" class="product__name">${this.name}</a>
                     <div class="product__price"> ${this.price}  ${this.currency}</div> 
                     </div>
                <button class="product__add" onclick="addToCart()" >Add to Cart</button>
                </div>
            </div>`;
    }
}


class CartItem {
    constructor(id, prod_image, name, price, currency) {
        this.id = id;
        this.prod_image = prod_image;
        this.name = name;
        this.price = price;
        this.currency =currency;

    }
    render() {
        return `<div class="header__right_cart_box1" id="${this.id}">
                    <a  class="header__right_cart_img"
                    ><img src=""${this.prod_img}"
                    /></a>
                    <div class="header__right_cart_content">
                        <h3>${this.name}</h3>
                        <br />
                        <p>1   <span>x</span>${this.price}  ${this.currency}</p>
                    </div>
                    <button class="header__right_cart_close"><p>&#9421;</p></button>
                </div>`;
    }

}
// почему не работает код ниже ? - при исполнении кода - если смотреть в консоль-
// он объекты с продуктами видит а их ID  не записывает - выдается undefind.
class Cart {
    constructor(container ='.header__right_cart') {
        this.container =container;
        this.cartProducts=[];
    }
    addToCart(id){
        let toCart;
        list.products.forEach(function (item) {
            if(id==item.id) {
                toCart ={
                    id:item.id,
                    prod_image:item.prod_image,
                    name:item.name,
                    price:item.price,
                    currency:item.currency
                }
            }

        });
        this.cartProducts.push(toCart);
    }
    render() {
        const cartBlock = document.querySelector(this.container);
        for (let product of this.cartProducts) {
            const cartItem = new CartItem(product.id, product.prod_image, product.name, product.price, product.currency);
            this.cartProducts.push(CartItem);
            cartBlock.insertAdjacentHTML('afterbegin', cartItem.render());
        }
    }

}
// Для корзины нужны будут следующие методы:
// Добавление товара в корзину
// Удаление товара из корзины
// Подсчет стоимости товаров в корзине
// Увеличение количества товара в корзине
// Уменьшение количества товара в корзине
// получение товара из localStorage или файла json после его попадания туда по кнопке "Add to cart"


document.getElementById('cartButton').addEventListener("click", hiddenCloseСlick);
function hiddenCloseСlick() {
    let element = document.getElementById('productCart');
    if (element.style.display == "none"){
        element.style.display = "block";
    } else {
        element.style.display = "none"}
}


const list = new ProductsList();
const cart = new Cart();
list.totalSumm();

function addToCart(id){
    cart.addToCart(id);
}
