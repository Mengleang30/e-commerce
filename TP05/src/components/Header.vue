<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="header">
        <h2>Header</h2>
        <ul>
            <RouterLink to="/page1">Page1</RouterLink>
            <RouterLink to="/page2">Page2</RouterLink>
            <RouterLink to="/page3">Page3</RouterLink>
        </ul>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: .6rem;
}
.header ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}
.router-link-active {
  color: #ff6347;
  font-weight: bold;
}
</style>