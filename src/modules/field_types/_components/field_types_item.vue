<template>
  <li class="item field-types__item">
    <h4 v-text="fieldType.type"></h4>
    <h6>Description</h6>
    <p v-text="fieldType.desc"></p>
    <h6>Default Display</h6>
    <p v-text="fieldType.default"></p>
  </li>
</template>

<script>
  export default {
    name: 'field-type-item',
    props: {
      fieldType: {
        type: Object
      }
    }
  };
</script>
