<template>
  <div>
    <h1 :class="[$style.redHeader]">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "My new RED App",
    };
  },
};
</script>

<style module>
.redHeader {
  color: red;
}
</style>