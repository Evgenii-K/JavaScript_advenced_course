<template>
  <div>
    <div :class="$style.cart__wrapper" v-for="item in cartProducts">
      <div>
        <h3>{{ item.name }}</h3>
        <p>Price: {{ item.price }}$</p>
      </div>
      <div :class="$style.cart__quantity">
        <p>Quantity:</p>
        <button :class="$style.cart__minus">
          <i class="far fa-minus-square"></i>
        </button>
        2
        <button :class="$style.cart__plus">
          <i class="far fa-plus-square"></i>
        </button>
        <button :class="$style.btn">(Delete item)</button>
      </div>
      <p>Sum: 100$</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartProducts: "",
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