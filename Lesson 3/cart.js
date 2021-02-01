const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';


// function makeGETRequest(url, callback) {
//     return new Promise((resolve, reject) => {
//         let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
//         xhr.open("GET", url, true);
//         xhr.onload = () => resolve(callback(xhr.responseText));
//         xhr.onerror = () => reject(xhr.statusText);
//         xhr.send();
//     });
// }

class ProductItem  {
    constructor(product, img='http://localhost:63342/GekkProject/img/product/product-3.png') {
        this.id = product.id;
        this.img = img;
        this.price= product.price;
        this.product_name = product.product_name;
        this.id = product.id;
        // this.currency = product.currency;
    }
    render() {
        return `
        <div class="product" id="${this.id}">
                <a href="#">
                <img class="product__img" src="${this.img}" alt="img" />
                </a>
                <div class="product__content">
                      <a href="#" class="product__name">${this.product_name}</a>
                     <div class="product__price"> ${this.price} \u20bd </div> 
                     </div>
                <button class="product__add" onclick="addToCart()" >Add to Cart</button>
                </div>
            </div>`;
    }
}
class  ProductsList {
    constructor(container = '.product-box') {
        this.container = container;
        this.products = [];
        this.allProducts = [];
        this.getProducts().then((data) => {
            this.products = [...data];
            this.render();
        });
        // this.totalSumm();
        }

    getProducts() {
        return fetch(`${API}catalogData.json`)
            .then((response) => response.json())
            .catch((error)=> {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.products) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }

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


const productList = new ProductsList();
