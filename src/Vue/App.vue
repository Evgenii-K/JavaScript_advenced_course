<template>
  <div :class="$style.wrapper">
    <Header />
    <Catalog v-show="link === 'Catalog'" />
    <AdminPanel v-if="link === 'Admin'" />
    <Footer @link="link = $event" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Catalog from "./components/Catalog.vue";
import AdminPanel from "./components/AdminPanel.vue"
import Footer from "./components/Footer.vue"

export default {
  data() {
    return {
      link: 'Catalog'
    }
  },
  components: {
    Header,
    Catalog,
    Footer,
    AdminPanel
  },
};
</script>

<style module>
.wrapper {
  margin: 0 5px;
  min-height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}
</style>