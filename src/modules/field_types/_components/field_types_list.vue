<template>
  <table>
    <tr>
      <th>Type</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
    <FieldTypeItem
      v-for="fieldType in fieldTypes"
      :key="fieldType.id"
      :fieldType="fieldType"
    />
    <tr class="table-row__fallback" v-if="!fieldTypes || fieldTypes.length === 0">
      <td colspan="3">No Field Types Given</td>
    </tr>
  </table>
</template>

<script>
  import FieldTypeItem from './field_type_item';
  export default {
    name: 'field-types-list',
    components: {
      FieldTypeItem
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
