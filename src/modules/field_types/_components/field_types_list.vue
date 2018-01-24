<template>
  <ul class="list field-types__list">
    <FieldTypesItem
      v-for="fieldType in fieldTypes"
      :key="fieldType.id"
      :fieldType="fieldType"
    />
    <li
      class="item field-types__spinner"
      v-if="!fieldTypes || fieldTypes.length === 0"
    >
      Fetching Field Types...
    </li>
  </ul>
</template>

<script>
  import FieldTypesItem from './field_types_item';
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
  .table-row__fallback {
    td {
      text-align: center;
    }
  }
  table {
    border: 1px solid #999;
  }
</style>
