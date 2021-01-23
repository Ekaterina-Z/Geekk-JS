const products = [
    {
        id: 1,
        name: 'Mango People T-shirt',
        price: 52,
        prod_image: 'img/product/product-1.png',
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
        prod_image: 'img/product/product-2.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
    {
        id: 3,
        name: 'Mango People T-shirt',
        price: 52,
        currency: '$',
        prod_image: 'img/product/product-3.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
    {
        id: 4,
        name: 'Mango People T-shirt',
        price: 52,
        currency: '$',
        prod_image: 'img/product/product-4.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
    {
        id: 5,
        name: 'Mango People T-shirt',
        price: 52,
        currency: '$',
        prod_image: 'img/product/product-5.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
    {
        id: 6,
        name: 'Mango People T-shirt',
        price: 52,
        currency: '$',
        prod_image: 'img/product/product-6.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
    {
        id: 7,
        name: 'Mango People T-shirt',
        price: 52,
        currency: '$',
        prod_image: 'img/product/product-7.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
    {
        id: 8,
        name: 'Mango People T-shirt',
        price: 52,
        currency: '$',
        prod_image: 'img/product/product-8.png',
        desiner: 'Pavel',
        color: 'red',
        description: 'Compellingly actualize fully researched processes before proactivtt.',
        size: 'XXL',
        availebel: true
    },
];


document.getElementById('cartButton').addEventListener("click", hiddenCloseСlick);
function hiddenCloseСlick() {
    let element = document.getElementById('productCart');
    if (element.style.display == "none"){
        element.style.display = "block";
    } else {
        element.style.display = "none"}
};


const renderProduct = (name, price,prod_image='', currency) => {
    return `<div class="product" id="product">
                <a href="#">
                <img class="product__img" src="${prod_image}" alt="img" />
                </a>
                <div class="product__content">
                      <a href="#" class="product__name">${name}</a>
                     <div class="product__price"> ${ price}  ${currency}</div> 
<!--                      как  можно проще добавить значек доллара?-->
                </div>
                <button class="product__add" >Add to Cart</button>
                </div>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(function (product) {
        return renderProduct(product.name, product.price, product.prod_image, product.currency);
    });
    document.querySelector('.product-box').innerHTML = productList;
    // insertAdjacentHTML();
};

renderProducts(products);

//* НЕ понимаю как удалить запятые при выводе элементов из массива, метод join не помогает *//
//* есть ли у вас ссылки на добавление товара в корзину, если она написана с помощью grid Layout? *//