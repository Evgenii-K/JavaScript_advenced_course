<template>
  <footer :class="$style.footer">
    <button 
      :class="$style.footer__btn"
      @click="$emit('link', 'Catalog')"
    >
      Catalog
    </button>
    <button 
      :class="$style.footer__btn"
      @click="$emit('link', 'Admin')"
    >
      Admin panel
    </button>
  </footer>
</template>

<script>
export default {

};
</script>

<style module>
  .footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 50px;
    border: 2px solid darkgray;
    position: relative;
    margin-top: 30px;
    padding: 0 calc(50% - 700px) 0 calc(50% - 700px);
  }

  .footer__btn {
    background-color: white;
    border-radius: 15px;
    border: 2px solid darkgray;
    width: 100px;
    height: 30px;
  }

  .footer__btn:hover {
    color: red;
  }
</style>