<template>
  <section class="container">
    <FieldList :fields="fields" />
  </section>
</template>

<script>
  import FieldList from './field_list';
  export default {
    name: 'Container',
    components: {
      FieldList
    },
    props: {
      fields: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    max-width: 50em;
  }
</style>
