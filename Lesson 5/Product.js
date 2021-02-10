export const Product = {
    props: ['product', 'img'],
    template: `<div class="product-item">
        <h3 class="product-title">{{ product.product_name }}</h3>
        <img class="product-img" :src="img" :alt="product.product_name" width="200">
        <p class="product-price">{{ product.price }}</p>
        <button class="product-add-to-cart-btn" @click="$root.$refs.cart.addItem(product)">Add to Cart</button>
    </div>`
}

