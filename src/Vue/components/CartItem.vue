<template>
  <div :class="$style.cart__wrapper">
    <div>
      <h3>{{ requestData.name }}</h3>
      <p>Price: {{ requestData.price }}$</p>
    </div>
    <div :class="$style.cart__quantity">
      <p>Quantity:</p>
      <button :class="$style.cart__minus" @click="minus">
        <i class="far fa-minus-square"></i>
      </button>
      {{ requestData.count }}
      <button :class="$style.cart__plus" @click="plus">
        <i class="far fa-plus-square"></i>
      </button>
      <button :class="$style.btn" @click="deleteItem">(Delete item)</button>
    </div>
    <p>Sum: {{ sumCalc }}$</p>
    <hr />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    id: String,
  },
  methods: {
    ...mapActions(["addToCart", "reduceCart", "removeCart"]),
    plus() {
      this.addToCart(this.id);
    },
    minus() {
      this.reduceCart(this.id);
    },
    deleteItem() {
      this.removeCart(this.id);
    },
  },
  computed: {
    ...mapGetters(["getItemInCart"]),
    requestData() {
      return {
        name: this.getItemInCart[this.id].name,
        price: this.getItemInCart[this.id].price,
        count: this.getItemInCart[this.id].count,
      };
    },
    sumCalc() {
      let price = this.getItemInCart[this.id].price,
        count = this.getItemInCart[this.id].count;
      return price * count;
    },
  },
};
</script>

<style module>
.cart__wrapper {
  margin: 10px;
}
hr {
  margin-top: 10px;
  border: none;
  background-color: darkgray;
  color: darkgray;
  height: 2px;
}
.cart__quantity {
  display: flex;
  justify-content: space-between;
}
.cart__plus,
.cart__minus {
  background-color: white;
  width: 16px;
  height: 16px;
}
.btn {
  background-color: white;
  width: 100px;
  height: 16px;
}
.btn:hover {
  color: red;
}
</style>