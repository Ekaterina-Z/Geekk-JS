export const CartItem = {
    props: ['item','img'],
    template: `
    <div class="cart-product-item">
        <h3 class="cart-product-title">{{ item.product_name }}</h3>
        <img class="cart-product-img" :src="img" alt="img" width="100">
        <button class="cart-product-remove-btn" name="remove" @click="$parent.removeItem(item.id_product)">Х</button>
        <p class="cart-product-quantity">Количество: {{ item.quantity }}</p>
        <p class="cart-product-price">Цена: $ {{ item.price * item.quantity }}</p>
    </div>`
}