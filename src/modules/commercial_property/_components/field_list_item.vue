<template>
  <tr>
    <td v-text="field.type"></td>
    <td v-text="field.desc"></td>
    <td v-text="field.default"></td>
  </tr>
</template>

<script>
  export default {
    name: 'FieldListItem',
    props: {
      field: {
        type: Object
      }
    }
  };
</script>
