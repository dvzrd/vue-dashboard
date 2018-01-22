<template>
  <figure class="module module--field-types">
    <figcaption class="caption module-caption">
      <h2 class="heading module-heading">Field Types</h2>
    </figcaption>
    <input type="text" placeholder="Filter" />
    <FieldTypesList :fieldTypes="fieldTypes" />
  </figure>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesList from './_components/field_types_list';
  export default {
    name: 'module-field-types',
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
