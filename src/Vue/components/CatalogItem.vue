<template>
  <div :class="$style.item">
    <img :src="item.img" alt="img-item" />
    <h3 :class="$style.h">{{ item.name }}</h3>
    <p :class="$style.p">Price: {{ item.price }}$</p>
    <button :class="$style.btn">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
};
</script>

<style module>
.item {
  width: 220px;
  padding: 10px;
  margin-bottom: 30px;
  border: 2px solid darkgray;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
}
img {
  width: 200px;
  height: 200px;
  border: 2px solid darkgray;
  align-self: center;
  margin-bottom: 5px;
}
.h {
  padding-bottom: 5px;
}
.p {
  padding-bottom: 10px;
}
.btn {
  background-color: white;
  border-radius: 15px;
  border: 2px solid darkgray;
  width: 100px;
  height: 30px;
  align-self: flex-end;
}
.btn:hover {
  color: red;
}
</style>