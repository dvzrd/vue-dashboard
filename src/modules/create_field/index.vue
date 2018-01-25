<template>
  <section
    v-bind:id="config.id"
    class="container create-field__container"
  >
    <FieldTypesContainer
      :config="config.toolbar"
      :fieldTypes="fieldTypes"
    />
    <FieldDetailsContainer
      :config="config.main"
    />
    <FieldGroupsContainer
      :config="config.sidebar"
      :fieldGroups="fieldGroups"
    />
  </section>
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
        fieldGroups: '$_createField/fieldGroups'
      })
    },
    created() {
      this.$store.registerModule('$_createField', store);
    },
    mounted() {
      this.$store.dispatch('$_createField/getConfig');
      this.$store.dispatch('$_createField/getFieldTypes');
      this.$store.dispatch('$_createField/getFieldGroups');
    }
  }
</script>
