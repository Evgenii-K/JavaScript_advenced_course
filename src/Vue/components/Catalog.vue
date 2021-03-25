<template>
  <div :class="$style.catalog__wrapper">
    <div :class="$style.catalog">
      <CatalogItem v-for="id of getItemOfPage" :id="id" :key="id" />
    </div>
    <button :class="$style.btn__show">Show more</button>
    <div>{{ getItemInCart }}</div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CatalogItem,
  },
  methods: {
    ...mapActions(["requestData"]),
  },
  computed: {
    ...mapGetters(["getItemOfPage", "getItemInCart"]),
  },
  created() {
    this.requestData(1);
  },
};
</script>

<style module>
.catalog__wrapper {
  display: flex;
  flex-direction: column;
}
.btn__show {
  align-self: center;
  background-color: white;
  border-radius: 15px;
  border: 2px solid darkgray;
  width: 100px;
  height: 30px;
}
.btn__show:hover {
  color: red;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 calc(50% - 700px) 0 calc(50% - 700px);
}
</style>