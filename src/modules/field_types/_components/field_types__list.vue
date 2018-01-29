<template>
  <ul
    id="field-types-list"
    class="list toolbar__list field-types__list">
    <FieldTypesItem
      v-for="fieldType in fieldTypes"
      :key="fieldType.id"
      :selected="fieldType.id === selectedFieldType"
      :filtered="fieldTypesFilter.length > 0 && fieldType.type !== fieldTypesFilter"
      :fieldType="fieldType"
    />
    <li
      class="item loading__item field-types__loading"
      v-if="!fieldTypes || fieldTypes.length === 0"
    >
      Fetching available field types...
    </li>
  </ul>
</template>

<script>
  import FieldTypesItem from './field_types__item';
  export default {
    name: 'field-types-list',
    components: {
      FieldTypesItem
    },
    props: {
      selectedFieldType: {
        type: String
      },
      fieldTypesFilter: {
        type: String
      },
      fieldTypes: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';

  // field types list layout
  .field-types__list {
    flex: $fill-base;
    padding: $space-frame;

    @media only screen and (min-width: $phablet) {
      display: flex;
      flex-flow: row wrap;
      margin-left: -$space-frame;
    }

    @media only screen and (min-width: $desktop) {
      margin-top: $space-apex + $space-split;
      margin-bottom: $space-brand;
    }
  }

  .field-types__loading {
    margin: 0;
    margin-left: $space-frame;
    flex: $fill-base;
  }
</style>
