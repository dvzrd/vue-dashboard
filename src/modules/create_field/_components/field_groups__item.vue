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
  // import color palette variables
  @import '../../../theme/palette';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  .field-groups__item {
    cursor: pointer;
    flex: $fill-base;
    margin-bottom: $space-frame;
    padding: $space-frame;
    background: $athens;
    transition: $shift-base;

    &:hover {
      box-shadow: $shadow-dash $cadet;
      background: $loblolly;
    }
  }

  .field-groups__heading {
    margin-bottom: $space-split;
    font-size: $space-trim;
  }

  .field-groups__context {
    margin: 0;
    font-size: $size-legal;
    line-height: $height-core;
  }
</style>
