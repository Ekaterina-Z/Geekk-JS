<template>
    <div class="header__right">
        <a href="#" class="header__cart"
        ><img src="@/assets/img/cart.png" alt="cart"
        /></a>
        <div class="header__right_cart">
            <cart-product></cart-product>
            <div class="header__right_cart_price">
                <h2>Total</h2>
                <h2>$ 500.00</h2>
            </div>
            <button class="header__right_cart_button1">Check OUT</button>
            <button class="header__right_cart_button2">Go to cart</button>
        </div>
    </div>
</template>

<script>
    import CartProduct from "./CartProduct";
    export default {
        name: "HeaderCart",
        components: {CartProduct}
    }
</script>

<style scoped>

</style>