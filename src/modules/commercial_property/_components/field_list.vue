<template>
  <table>
    <tr>
      <th>Type</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
    <FieldListItem
      v-for="field in fields"
      :key="field.id"
      :field="field"
    />
    <tr class="table-row__fallback" v-if="!fields || fields.length === 0">
      <td colspan="3">No Fields given</td>
    </tr>
  </table>
</template>

<script>
  import FieldListItem from './field_list_item';
  export default {
    name: 'FieldList',
    components: {
      FieldListItem
    },
    props: {
      fields: {
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
