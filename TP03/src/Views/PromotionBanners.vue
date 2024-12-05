<template>
  <div class="promotion-banner-list">
    <PromotionBanner
      v-for="(promote, index) in stores.promotions"
      :key="index"
      :title="promote.title"
      :image="promote.image"
      :color="promote.color"
      :buttonColor="promote.buttonColor"
    />
  </div>
</template>

<script>
import { useProductStore } from "@/stores/product";

import PromotionBanner from "../Components/PromotionBanner.vue";
export default {
  components: { PromotionBanner },
  setup() {
    const stores = useProductStore();
    return { stores };
  },
  data() {
    // return {
    //   promotions: [],
    // };
  },

  // methods: {
  //   fetchPromotion() {
  //     axios
  //       .get("http://localhost:3000/api/promotions")
  //       .then((response) => {
  //         console.log(response.data); // Access the data

  //         this.promotions = response.data;
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   },
  // },

  async mounted() {
    this.stores.fetchPromotion();
    // this.stores.fetchGroup();
    console.log("Promotion from api: " + this.stores.promotions);
  },
};
</script>

<style scoped>
.promotion-banner-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
}
</style>
