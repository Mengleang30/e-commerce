<template>
  <div class="categories-withNavbar">
    <Menu
      classify="Featured Categories"
      :Listbar="stores.groups"
      @changeBar="updateCurrentGroup"
    ></Menu>

    <div class="product-list">
      <ProductCategory
        v-for="(product, index) in filterCategories"
        :key="index"
        :name="product.name"
        :productCount="product.productCount"
        :image="product.image"
        :color="product.color"
      />
    </div>
  </div>
</template>
<script>
import { useProductStore } from "@/stores/product";

import ProductCategory from "../Components/ProductCategory.vue";
import Menu from "@/Components/Menu.vue";

import { mapState } from "pinia";

export default {
  components: { ProductCategory, Menu },

  // run at the first time

  setup() {
    const stores = useProductStore();

    return { stores };
  },
  data() {
    return {
      currentGroupName: "All", // default group name
    };
  },
  computed: {
    ...mapState(useProductStore, {
      groups: "groups",
      categories: "categories",
    }),
    filterCategories() {
      if (this.currentGroupName === "All") {
        return this.categories;
      }

      return this.stores.getCategoriesByGroup(this.currentGroupName);
    },
  },
  methods: {
    updateCurrentGroup(groupName) {
      this.currentGroupName = groupName;
      console.log(groupName);
    },
  },
  async mounted() {
    this.stores.fetchCategory();
    this.stores.fetchGroup();

    // this.stores.fetchProduct();
    // Test getter here

    // console.log(this.stores.categories);

    // console.log(
    //   "Categories in 'fruits' group:",
    //   this.stores.getCategoriesByGroup("fruits")
    // );

    // Test `getCategoriesByGroup`
    // const categoriesByGroup = this.stores.getCategoriesByGroup("fruits");
    // try {
    //   const categoriesByGroup = this.stores.getCategoriesByGroup("fruits");
    //   console.log("Categories in 'fruits' group:", categoriesByGroup);
    // } catch (error) {
    //   console.log(error);
    // }
    // // Test `getProductsByGroup`
    // const productsByGroup = this.stores.getProductsByGroup("fruits");
    // console.log("Products in 'fruits' group:", productsByGroup);

    // // Test `getProductsByCategory`

    try {
      console.log("product is popular" + this.stores.getPopularProducts);
    } catch (error) {
      console.log(error);
    }

    // // Test `getPopularProducts`
    // const popularProducts = this.stores.getPopularProducts;
    // console.log("Popular products:", popularProducts);
  },
};
</script>
<style scoped>
.categories-withNavbar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.product-list {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
  /* width: 100vw; */

  height: auto;
}
.product-image {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-bottom: 0.2rem;
}
</style>
