<template>
  <li
    v-bind:id="fieldTag.id"
    class="item toolbar__item field-tags__item">
      <span
        class="tag field-tags__tag"
        v-text="fieldTag.name"
      >
      </span>
  </li>
</template>

<script>
  export default {
    name: 'field-tags-item',
    props: {
      fieldTag: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-tags-item
</style>
