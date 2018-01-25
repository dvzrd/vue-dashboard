<template>
  <li
    v-bind:id="fieldGroup.id"
    class="item toolbar__item field-groups__item">
    <h4
      class="field-groups__heading"
      v-text="fieldGroup.name"
    >
    </h4>
    <p class="field-groups__context">
      <span
        class="field-groups__meta"
        v-text="fieldGroup.inputCount"
      ></span>
      other inputs
    </p>
  </li>
</template>

<script>
  export default {
    name: 'field-groups-item',
    props: {
      fieldGroup: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-groups-item
</style>
