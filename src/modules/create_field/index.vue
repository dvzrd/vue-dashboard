<template>
  <form
    v-bind:id="config.id"
    v-bind:class="`container ${config.id}__container`"
  >
    <FieldTypesModule />
    <FieldDetailsContainer
      :config="config.main"
      :fieldDetails="fieldDetails"
      :fieldTags="fieldTags"
    />
    <FieldGroupsModule />
  </form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesModule from '../field_types';
  import FieldGroupsModule from '../field_groups';
  import FieldDetailsContainer from './_containers/create_field__details';
  export default {
    name: 'create-field-container',
    components: {
      FieldTypesModule,
      FieldGroupsModule,
      FieldDetailsContainer,
    },
    computed: {
      ...mapGetters({
        // TODO: break up into seperate modules
        config: '$_createField/config',
        // this will remain here as create field components
        fieldDetails: '$_createField/fieldDetails',
        fieldReferenceName: '$_createField/fieldReferenceName',
        // TODO: move to fieldTags module
        fieldTags: '$_createField/fieldTags',
        selectedTagGroup: '$_createField/selectedTagGroup'
      })
    },
    created() {
      this.$store.registerModule('$_createField', store);
    },
    mounted() {
      this.$store.dispatch('$_createField/getConfig');
      this.$store.dispatch('$_createField/getFieldDetails');
      this.$store.dispatch('$_createField/getFieldTags');
    }
  }
</script>
