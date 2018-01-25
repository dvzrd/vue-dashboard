<template>
  <div class="view home__view" id="home">
    <Hero />
    <CreateFieldModule />
  </div>
</template>

<script>
  import Hero from '@/components/hero';
  import CreateFieldModule from '@/modules/create_field';
  export default {
    name: 'view-home',
    components: {
      Hero,
      CreateFieldModule
    }
  };
</script>
