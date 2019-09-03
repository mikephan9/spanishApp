<template>
  <span class="container">
    <app-header></app-header>
    <router-view></router-view>
  </span>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    }
  }

</script>

<style>
 .container {
    margin: 0;
    padding: 0;
}

</style>
