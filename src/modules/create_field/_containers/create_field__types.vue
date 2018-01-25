<template>
  <aside
    id="field-types"
    class="wrapper toolbar__wrapper create-field__field-types--toolbar"
  >
    <figure class="container toolbar__container field-types__toolbar--container">
      <figcaption class="caption toolbar__caption field-types__toolbar--caption">
        <h3 class="heading toolbar__heading field-types__toolbar--heading">
          Field Types
        </h3>
      </figcaption>
      <FieldTypesFilter />
      <FieldTypesList
        :fieldTypes="fieldTypes"
      />
    </figure>
  </aside>
</template>

<script>
  import FieldTypesFilter from '../_components/field_types__filter'
  import FieldTypesList from '../_components/field_types__list'
  export default {
    name: 'field-types-container',
    components: {
      FieldTypesFilter,
      FieldTypesList
    },
    props: {
      id: {
        type: String
      },
      heading: {
        type: String
      },
      fieldTypes: {
        type: Array
      }
    }
  }
</script>
