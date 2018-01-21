<template>
  <tr>
    <td v-text="fieldType.type"></td>
    <td v-text="fieldType.desc"></td>
    <td v-text="fieldType.default"></td>
  </tr>
</template>

<script>
  export default {
    name: 'FieldTypeItem',
    props: {
      fieldType: {
        type: Object
      }
    }
  };
</script>
