<template>
  <div class="product" id="product">
    <a href="#">
      <img class="product__img" :src="imageURL" alt="img" />
    </a>
    <div class="product__content">
      <a href="#" class="product__name">{{ name }}</a>
      <div class="product__price">$ {{ price }}</div>
    </div>
    <a class="product__add" @click="sendId">Add to Cart</a>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  // emits: ["sendId"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true,
      validator: value => value > 0
    }
  },

  computed: {
    imageURL() {
      return require(`@/assets/img/product/${this.image}`);
    }
  },
  methods: {
    sendId() {
        this.$emit('sendId',this.id)
    }
  }

};
</script>

<style scoped></style>
