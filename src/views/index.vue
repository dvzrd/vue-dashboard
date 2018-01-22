<template>
  <main class="view view-home" id="home">
    <Hero />
    <FieldTypesModule />
  </main>
</template>

<script>
  import Hero from '@/components/hero';
  import FieldTypesModule from '@/modules/field_types';
  export default {
    name: 'view-home',
    components: {
      Hero,
      FieldTypesModule
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for home view
</style>
