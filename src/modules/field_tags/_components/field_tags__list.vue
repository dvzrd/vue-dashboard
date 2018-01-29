<template>
  <ul
    id="field-tags-list"
    class="list tags__list field-tags__list">
    <fieldTagsItem
      v-for="fieldTag in fieldTags"
      :key="fieldTag.id"
      :selected="fieldTag.id === selectedFieldTagsGroup"
      :fieldTag="fieldTag"
    />
    <li
      class="item field-tags__loading"
      v-if="!fieldTags || fieldTags.length === 0"
    >
      Fetching available field tags...
    </li>
  </ul>
</template>

<script>
  import fieldTagsItem from './field_tags__item';
  export default {
    name: 'field-tags-list',
    components: {
      fieldTagsItem
    },
    props: {
      selectedFieldTagsGroup: {
        type: String
      },
      fieldTags: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import design composition variables
  @import '../../../theme/composition';

  .field-tags__list {
    display: flex;
    flex-flow: row wrap;
    flex: $fill-base;
  }
</style>
