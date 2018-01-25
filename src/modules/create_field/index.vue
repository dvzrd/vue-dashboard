<template>
  <form
    v-bind:id="config.id"
    class="container create-field__container"
  >
    <FieldTypesContainer
      :config="config.toolbar"
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
        config: '$_createField/config',
        fieldTypes: '$_createField/fieldTypes',
        fieldDetails: '$_createField/fieldDetails',
        fieldTags: '$_createField/fieldTags',
        fieldGroups: '$_createField/fieldGroups'
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
    }
  }
</script>
