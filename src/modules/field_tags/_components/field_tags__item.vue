<template>
  <li
    v-bind:id="fieldTag.id"
    v-bind:class="{
      'item tags__item field-tags__item': true,
      'selected': selected
    }"
  >
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
      selected: {
        type: Boolean
      },
      fieldTag: {
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
  @import '../../../theme/content';;

  .field-tags__item {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    margin-right: $space-press;
    margin-bottom: $space-press;
    transition: $shift-base;

    &.selected {
      opacity: 1;
      visibility: visible;
      position: relative;
    }
  }

  .field-tags__tag {
    text-align: center;
    padding: $gutter-label;
    background: $loblolly;
    font-size: $size-legal;
  }
</style>
