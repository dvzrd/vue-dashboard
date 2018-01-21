<template>
  <section class="container">
    <FieldList :fields="fields" />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldList from './_components/field_list';
  export default {
    name: 'CommercialPropertyModule',
    components: {
      FieldList
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
