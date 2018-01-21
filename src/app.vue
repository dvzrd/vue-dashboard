<template>
  <div class="frame" id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'
  export default {
    name: 'app',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  // TODO: import globals from theme
  body {
    margin: 0;
  }

  .frame {
    display: flex;
    flex-flow: column wrap;
    min-height: 100vh;
  }
</style>
