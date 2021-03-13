<template>
  <header class="header center">
    <h1 class="heading">{{ namePage.price }}</h1>
    <ButtonCart @cartDisplay="onButtonClick" />
    <div class="card" v-show="cartDisplay">
      <div class="card__heading">
        <h3>Card list</h3>
      </div>
      <div class="card__list">
        <div class="cart__empty">Cart is empty</div>
      </div>
    </div>
  </header>
</template>

<script>
import ButtonCart from "./ButtonCart.vue";

export default {
  data() {
    return {
      cartDisplay: false,
    };
  },
  props: {
    namePage: {},
  },
  components: {
    ButtonCart,
  },
  methods: {
    onButtonClick({ showCart }) {
      this.cartDisplay = showCart;
    },
  },
};
</script>

<style module>
.redHeader {
  color: red;
}
</style>