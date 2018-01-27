<template>
  <form
    v-bind:id="config.id"
    class="container create-field__container"
  >
    <FieldTypesContainer
      :config="config.toolbar"
      :fieldTypesFilter="fieldTypesFilter"
      :selected="selectedFieldType"
      :fieldTypes="fieldTypes"
    />
    <FieldDetailsContainer
      :config="config.main"
      :fieldDetails="fieldDetails"
      :fieldTags="fieldTags"
    />
    <FieldGroupsContainer
      :config="config.sidebar"
      :fieldGroups="fieldGroups"
    />
  </form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesContainer from './_containers/create_field__types';
  import FieldDetailsContainer from './_containers/create_field__details';
  import FieldGroupsContainer from './_containers/create_field__groups';
  export default {
    name: 'create-field-container',
    components: {
      FieldTypesContainer,
      FieldDetailsContainer,
      FieldGroupsContainer
    },
    computed: {
      ...mapGetters({
        // TODO: break up into seperate modules
        config: '$_createField/config',
        // TODO: move to fieldTypes module
        fieldTypes: '$_createField/fieldTypes',
        fieldTypesFilter: '$_createField/fieldTypesFilter',
        filteredFieldTypes: '$_createField/filteredFieldTypes',
        activeFieldTypeIndex: '$_createField/activeFieldTypeIndex',
        selectedFieldType: '$_createField/selectedFieldType',
        // this will remain here as create field components
        fieldDetails: '$_createField/fieldDetails',
        fieldReferenceName: '$_createField/fieldReferenceName',
        // TODO: move to fieldTags module
        fieldTags: '$_createField/fieldTags',
        selectedTagGroup: '$_createField/selectedTagGroup',
        // TODO: move to fieldGroups module
        fieldGroups: '$_createField/fieldGroups',
        selectedFieldGroup: '$_createField/selectedFieldGroup',
      })
    },
    created() {
      this.$store.registerModule('$_createField', store);
    },
    mounted() {
      this.$store.dispatch('$_createField/getConfig');
      this.$store.dispatch('$_createField/getFieldTypes');
      this.$store.dispatch('$_createField/getFieldDetails');
      this.$store.dispatch('$_createField/getFieldTags');
      this.$store.dispatch('$_createField/getFieldGroups');

      console.log(this.$store);
    }
  }
</script>
