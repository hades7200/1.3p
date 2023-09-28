<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/resume" class="nav-link">Resume</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>


.nav-bar {
  background-color: #87CEEB; 
  padding: 10px;
}

.nav-link {
  color: #fff; 
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #0074cc; 
}
</style>
