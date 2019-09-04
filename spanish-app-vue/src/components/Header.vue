<template>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: orange;">
  <router-link class="navbar-brand" to="/">EspEng</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <!-- <li class="nav-item ">
        <router-link class="nav-link" to="/"><b>Home</b> <span class="sr-only">(current)</span></router-link>
      </li> -->
      <router-link to="/" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Home</a></router-link>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/learn">Learn</router-link>
      </li> -->
      <router-link to="/learn" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Learn</a></router-link>
      <router-link to="/support" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Support</a></router-link>
      <router-link to="/about" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">About</a></router-link>
    </ul>
    <span class="navbar-text">
      
    </span>
  </div>
</nav>
</template>

<script>
export default {


}
</script>

<style>
</style>