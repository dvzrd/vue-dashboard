<template>
  <section class="container">
    <FieldTypesList :fieldTypes="fieldTypes" />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesList from './_components/field_types_list';
  export default {
    name: 'FieldTypesModule',
    components: {
      FieldTypesList
    },
    computed: {
      ...mapGetters({
        fieldTypes: '$_fieldTypes/fieldTypes',
      })
    },
    created() {
      this.$store.registerModule('$_fieldTypes', store);
    },
    mounted() {
      this.$store.dispatch('$_fieldTypes/getFieldTypes');
    }
  };
</script>
