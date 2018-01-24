<template>
  <div class="view home__view" id="home">
    <CreateFieldModule />
  </div>
</template>

<script>
  import CreateFieldModule from '@/modules/create_field';
  export default {
    name: 'view-home',
    components: {
      CreateFieldModule
    }
  };
</script>
