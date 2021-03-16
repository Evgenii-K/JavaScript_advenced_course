<template>
  <div :class="$style.catalog__wrapper">
    <div :class="$style.catalog">
      <CatalogItem v-for="id of getItemOfPage" :id="id" :key="id" />
    </div>
    <button :class="$style.btn__show" @click="showMore">Show more</button>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      page: 0,
    };
  },
  components: {
    CatalogItem,
  },
  methods: {
    ...mapActions(["requestData"]),
    showMore() {
      this.page++;
      this.requestData(this.page);
    },
  },
  computed: {
    ...mapGetters(["getItemOfPage", "getItemInCart"]),
  },
  created() {
    this.showMore();
  },
};
</script>

<style module>
.catalog__wrapper {
  display: flex;
  flex-direction: column;
}
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 calc(50% - 700px) 0 calc(50% - 700px);
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
</style>