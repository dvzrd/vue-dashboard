<template>
  <section class="wrapper module--field-types">
    <figure class="container module-container">
      <figcaption class="caption module-caption">
        <h2 class="heading module-heading module-caption__heading">Field Types</h2>
      </figcaption>
      <FieldTypesFilter />
      <FieldTypesList :fieldTypes="fieldTypes" />
    </figure>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesFilter from './_components/field_types_filter';
  import FieldTypesList from './_components/field_types_list';
  export default {
    name: 'module-field-types',
    components: {
      FieldTypesFilter,
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
