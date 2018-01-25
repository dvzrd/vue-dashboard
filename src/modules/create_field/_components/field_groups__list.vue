<template>
  <ul
    id="field-groups-list"
    class="list toolbar__list field-groups__list">
    <FieldGroupsItem
      v-for="fieldGroup in fieldGroups"
      :key="fieldGroup.id"
      :fieldGroup="fieldGroup"
    />
    <li
      class="item field-groups__spinner"
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
      fieldGroups: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-groups-list
</style>
