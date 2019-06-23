<template>
  <div id="app">
    <div class="header">
    	<div class="navMenu">
            <router-link to="/">Doviz</router-link>
    		<router-link to="/gold">Altın</router-link>
    		<router-link to="/developer">Developer</router-link>
    	</div>
    </div>    
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
	@import "assets/css/main.scss";
</style>
