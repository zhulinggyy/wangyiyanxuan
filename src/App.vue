<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
 import FooterGuide from './components/FooterGuide/FooterGuide'
 export default {

   mounted(){
      this.$store.dispatch('getMockHome')
      this.$store.dispatch('getCategory')
   },

   components:{
      FooterGuide
    }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  body,html{
    overflow hidden
  }
</style>
