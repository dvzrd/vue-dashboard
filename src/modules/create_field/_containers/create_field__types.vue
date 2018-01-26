<template>
  <aside
    id="field-types"
    class="wrapper toolbar__wrapper create-field__field-types--toolbar"
  >
    <figure class="container toolbar__container field-types__toolbar--container">
      <figcaption class="caption toolbar__caption field-types__toolbar--caption">
        <h3 class="heading toolbar__heading field-types__toolbar--heading">
          Field Types
        </h3>
      </figcaption>
      <FieldTypesFilter />
      <FieldTypesList
        :fieldTypes="fieldTypes"
      />
    </figure>
  </aside>
</template>

<script>
  import FieldTypesFilter from '../_components/field_types__filter'
  import FieldTypesList from '../_components/field_types__list'
  export default {
    name: 'field-types-container',
    components: {
      FieldTypesFilter,
      FieldTypesList
    },
    props: {
      config: {
        type: Object
      },
      selected: {
        type: String
      },
      fieldTypes: {
        type: Array
      }
    },
    methods: {
      handleFieldTypesFilter () {
        this.$store.dispatch('$_createField/filterFieldTypes');
      }
    }
  }
</script>

<style lang="scss" scoped>
  // import color palette variables
  @import '../../../theme/palette';
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  // TODO: create modular dashboard components that share similar styles

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
