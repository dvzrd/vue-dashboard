<template>
  <aside
    v-bind:id="config.id"
    v-bind:class="`wrapper ${config.pattern}__wrapper ${config.parent}__${config.id}--${config.pattern}`"
  >
    <figure v-bind:class="`container ${config.pattern}__container ${config.id}__${config.pattern}--container`">
      <figcaption v-bind:class="`caption ${config.pattern}__caption ${config.id}__${config.pattern}--caption`">
        <h3
          v-bind:class="`heading ${config.pattern}__heading ${config.id}__${config.pattern}--heading`"
          v-text="config.name"
        >
        </h3>
      </figcaption>
      <FieldTypesFilter v-if="config.filter"/>
      <FieldTypesList
        :selectedFieldType="selectedFieldType"
        :fieldTypes="fieldTypes"
      />
    </figure>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesFilter from './_components/field_types__filter'
  import FieldTypesList from './_components/field_types__list'
  export default {
    name: 'field-types-module',
    components: {
      FieldTypesFilter,
      FieldTypesList
    },
    computed: {
      ...mapGetters({
        config: '$_fieldTypes/config',
        fieldTypes: '$_fieldTypes/fieldTypes',
        fieldTypesFilter: '$_fieldTypes/fieldTypesFilter',
        filteredByType: '$_fieldTypes/filteredByType',
        selectedFieldType: '$_fieldTypes/selectedFieldType'
      })
    },
    created() {
      this.$store.registerModule('$_fieldTypes', store);
    },
    mounted() {
      this.$store.dispatch('$_fieldTypes/getConfig');
      this.$store.dispatch('$_fieldTypes/getFieldTypes');
    }
  }
</script>

<style lang="scss" scoped>
  // import color palette variables
  @import '../../theme/palette';
  // import design structure variables
  @import '../../theme/structure';
  // import design composition variables
  @import '../../theme/composition';
  // import design content variables
  @import '../../theme/content';

  // TODO: create reusable dashboard components and import them into this container
  .toolbar__wrapper {
    @media only screen and (min-width: $phablet) {
      flex: 2;
      border-right: $border-dash $bali;
      border-bottom: $border-dash $bali;
    }

    @media only screen and (min-width: $tablet) {
      margin-top: $space-push;
      margin-right: $frame-rec;
      border: 0;
    }

    @media only screen and (min-width: $desktop) {
      flex: none;
      margin-right: 0;
      width: $frame-road;
    }
  }

  // toolbar caption
  .toolbar__caption {
    flex: $fill-base;
    padding: $space-frame;
    background: $lynch;

    @media only screen and (min-width: $desktop) {
      position: fixed;
      top: $space-shove;
      width: $frame-road;
    }
  }

  .toolbar__heading {
    margin: 0;
    color: $athens;
    font-size: $space-trim;
    text-transform: uppercase;
  }
</style>
