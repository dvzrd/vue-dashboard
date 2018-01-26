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
  // import color palette variables
  @import '../../../theme/palette';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';;

  .field-tags__item {
    margin-right: $space-press;
    margin-bottom: $space-press;
  }

  .field-tags__tag {
    padding: $gutter-label;
    background: $loblolly;
    font-size: $size-legal;
    text-align: center;
  }
</style>
