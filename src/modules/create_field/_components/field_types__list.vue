<template>
  <ul
    id="field-types-list"
    class="list toolbar__list field-types__list">
    <FieldTypesItem
      v-for="(fieldType, index) in fieldTypes"
      :active="index === activeIndex"
      :index="index"
      :key="fieldType.id"
      :fieldType="fieldType"
      @newactive="activeFieldType = $event"
    />
    <li
      class="item field-types__spinner"
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
      activeIndex: {
        type: Number
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

  .field-types__list {
    flex: $fill-base;
    padding: $space-frame;

    @media only screen and (min-width: $phablet) {
      display: flex;
      flex-flow: row wrap;
      margin-left: -$space-frame;
    }

    @media only screen and (min-width: $desktop) {
      margin-top: 6.5em;
    }
  }
</style>
