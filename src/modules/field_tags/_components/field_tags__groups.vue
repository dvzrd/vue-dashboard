<template>
  <ul
    id="field-tags-list"
    class="list tags__list field-tags__groups">
    <FieldTagsGroup
      v-for="fieldTagsGroup in fieldTagsGroups"
      :key="fieldTagsGroup.id"
      :selected="fieldTagsGroup.id === selectedFieldTagsGroup"
      :fieldTagGroup="fieldTagsGroup"
    />
    <li
      class="item field-tags__loading"
      v-if="!fieldTagsGroups || fieldTagsGroups.length === 0"
    >
      Fetching available field tags groups...
    </li>
  </ul>
</template>

<script>
  import FieldTagsGroup from './field_tags__group';
  export default {
    name: 'field-tags-groups',
    components: {
      FieldTagsGroup
    },
    props: {
      selectedFieldTagsGroup: {
        type: String
      },
      fieldTagsGroups: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import design composition variables
  @import '../../../theme/composition';

  .field-tags__groups {
    display: flex;
    flex-flow: row wrap;
    flex: $fill-base;
  }
</style>
