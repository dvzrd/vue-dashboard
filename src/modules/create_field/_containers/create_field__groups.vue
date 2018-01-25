<template>
  <aside
    id="field-groups"
    class="wrapper sidebar__wrapper create-field__field-groups--sidebar"
  >
    <figure class="container sidebar__container field-groups__sidebar--container">
      <figcaption class="caption sidebar__caption field-groups__sidebar--caption">
        <h3 class="heading sidebar__heading field-groups__sidebar--heading">
          Field Groups
          <small class="meta sidebar__meta field-groups__sidebar--meta">
            Choose a group for this field
          </small>
        </h3>
      </figcaption>
      <FieldGroupsList
        :fieldGroups="fieldGroups"
      />
      <button
        type="button"
        class="button sidebar__button field-groups__sidebar--button"
      >
        Create New Group
      </button>
    </figure>
  </aside>
</template>

<script>
  import FieldGroupsList from '../_components/field_groups__list'
  export default {
    name: 'field-groups-container',
    components: {
      FieldGroupsList
    },
    props: {
      config: {
        type: Object
      },
      fieldGroups: {
        type: Array
      }
    }
  }
</script>
