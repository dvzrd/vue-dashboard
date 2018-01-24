<template>
  <ul
    id="field-types-list"
    class="list toolbar__list field-types__list">
    <FieldTypesItem
      v-for="fieldType in fieldTypes"
      :key="fieldType.id"
      :fieldType="fieldType"
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
      fieldTypes: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-types-list
</style>
