<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('offline', ()=>{
       // 网络由正常常到异常时触发
       sessionStorage.locationUrl=window.location.href;
       this.$router.replace('/404')
      });
      window.addEventListener('online',()=>{
        window.location.href=sessionStorage.locationUrl
      });
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 0.3rem;
  }
</style>
