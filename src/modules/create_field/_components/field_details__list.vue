<template>
  <figure
    id="field-details-list"
    class="container main__container field-details__container"
  >
    <fieldDetailsItem
      v-for="fieldDetail in fieldDetails"
      :key="fieldDetail.id"
      :fieldDetail="fieldDetail"
    />
    <figcaption
      class="caption main__caption field-details__caption"
      v-if="!fieldDetails || fieldDetails.length === 0"
    >
      Fetching available field details...
    </figcaption>
  </figure>
</template>

<script>
  import FieldDetailsItem from './field_details__item';
  export default {
    name: 'field-details-list',
    components: {
      FieldDetailsItem
    },
    props: {
      fieldDetails: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-details-list
</style>
