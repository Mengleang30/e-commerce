<script setup>
import { RouterLink ,RouterView } from 'vue-router';

</script>

<template>
     <div class="Each_page">
    <nav>
    <div class="wrap_menu">
             Menu
            <RouterLink class="link" to="/page3/section1">Section 1</RouterLink>
            <RouterLink class="link" to="/page3/section2">Section 2</RouterLink>
            <RouterLink class="link" to="/page3/section3">Section 3</RouterLink>
            <RouterLink class="link" to="/page3/section4">Section 4</RouterLink>
    </div>
    </nav>
    <div class="page">
        <h2>Welcome to Page1</h2>
    <div class="child_view">
        <RouterView/>
        <span>of Page 3</span>
    </div>
    </div>

    </div>
</template>