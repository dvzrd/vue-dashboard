<template>
  <Container :fields="fields" />
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import Container from './_components/container';
  export default {
    name: 'CommercialPropertyModule',
    components: {
      Container
    },
    computed: {
      ...mapGetters({
        fields: '$_fields/fields',
      })
    },
    created() {
      this.$store.registerModule('$_fields', store);
    },
    mounted() {
      this.$store.dispatch('$_fields/getFields');
    }
  };
</script>
