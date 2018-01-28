<template>
  <li
    v-bind:id="fieldTag.id"
    v-bind:class="{
      'item tags__item field-tags__item': true,
      'selected': selected
    }"
    v-on:click="handleSelectFieldTagsGroup"
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
    },
    methods: {
      handleSelectFieldTagsGroup () {
        const fieldTagsGroupId = this.fieldTag.id;
        this.$store.dispatch('$_fieldTags/selectFieldTagsGroup', fieldTagsGroupId);
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
    cursor: pointer;
    text-align: center;
    padding: $gutter-label;
    background: $loblolly;
    font-size: $size-legal;
    transition: $shift-base;

    &:hover {
      background: $cadet;
    }

    .selected & {
      background: $bali;
    }
  }
</style>
