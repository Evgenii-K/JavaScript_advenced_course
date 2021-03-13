<template>
  <div>
    <div class="card__item--wrapper" v-for="item in cartProducts">
      <div class="card__item">
        <h3>{{ item.name }}</h3>
        <p>Price: {{ item.price }}$</p>
      </div>
      <div class="card__item--quantity">
        <p>Quantity:</p>
        <button class="card__item--minus">
          <i class="far fa-minus-square"></i>
        </button>
        2
        <button class="card__item--plus">
          <i class="far fa-plus-square"></i>
        </button>
        <button class="btn--delete">(Delete item)</button>
      </div>
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

<style>
</style>