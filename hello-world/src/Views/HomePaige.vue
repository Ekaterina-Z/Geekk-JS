<template>
    <div>
        <main-header></main-header>
        <catalog-block></catalog-block>
    </div>
</template>

<script>
    import CatalogBlock from "../components/CatalogBlock";
    import MainHeader from "../components/MainHeader";
    export default {
        name: "HomePaige",
        components: {MainHeader, CatalogBlock}
    }
</script>

<style scoped>

</style>