<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
    <div class="view">
        <RouterView />
    </div>
</template>

<style>
.view{
    flex-grow: 1;
    border: 1px solid rgb(122, 121, 121);
}
nav {
    width: 20%;
    height: 100%;
    border: 1px solid black;
}
nav .wrap_menu{
    text-align: center;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 1px;
    gap: .1rem;
    align-items: center;
    width: 100%;
}

.wrap_menu .link{
    text-decoration: none;
    border: 1px solid black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
}
.Each_page {
    height: 100%;
    display: flex;
}
.page {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.child_view{
    display: flex;
    gap: 3px;
}

.router-link-active {
  color: #ff6347;
  font-weight: bold;
}


</style>