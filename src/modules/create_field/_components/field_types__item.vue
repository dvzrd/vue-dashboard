<template>
  <li
    v-bind:id="fieldType.id"
    class="item toolbar__item field-types__item">
    <h4 v-text="fieldType.type"></h4>
    <i
      v-bind:class="`icon fa ${fieldType.icon}`"
    ></i>
    <h6>Description</h6>
    <p v-text="fieldType.desc"></p>
    <h6>Default Display</h6>
    <p v-text="fieldType.default"></p>
  </li>
</template>

<script>
  export default {
    name: 'field-types-item',
    props: {
      fieldType: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-types-item
</style>
