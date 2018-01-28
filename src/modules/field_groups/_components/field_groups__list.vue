<template>
  <ul
    id="field-groups-list"
    class="list toolbar__list field-groups__list">
    <FieldGroupsItem
      v-for="fieldGroup in fieldGroups"
      :key="fieldGroup.id"
      :selected="fieldGroup.id === selectedFieldGroup"
      :fieldGroup="fieldGroup"
    />
    <li
      class="item loading__item field-groups__loading"
      v-if="!fieldGroups || fieldGroups.length === 0"
    >
      Fetching available field groups...
    </li>
  </ul>
</template>

<script>
  import FieldGroupsItem from './field_groups__item';
  export default {
    name: 'field-groups-list',
    components: {
      FieldGroupsItem
    },
    props: {
      selectedFieldGroup: {
        type: String
      },
      fieldGroups: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import design composition variables
  @import '../../../theme/composition';

  .field-groups__list {
    display: flex;
    flex-flow: row wrap;
    flex: $fill-base;
    padding: $space-frame;
  }
</style>
