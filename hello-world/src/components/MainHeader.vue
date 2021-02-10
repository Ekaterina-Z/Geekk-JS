<template>
    <div class="header center">
    <div class="header__left">
        <a href="#" class="logo">
            <img class="logo__img" src="@/assets/img/logo.png" alt="logo" />
            BRAN
            <span>D</span>
        </a>
        <search></search>
    </div>
    <div class="header__right">
       <header-cart></header-cart>
        <div class="button">
            <button >My Account</button>
        </div>
    </div>
    </div>
</template>

<script>
    import HeaderCart from "./HeaderCart";
    import Search from "./Search";
    export default {
        name: "MainHeader",
        components: {Search, HeaderCart}
    }
</script>

<style scoped>

</style>