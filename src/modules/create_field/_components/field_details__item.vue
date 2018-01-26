<template>
  <div
    v-bind:id="fieldDetail.id"
    class="frame main__frame field-details__frame">
    <label
      v-bind:for="fieldDetail.name"
      class="label main__label field-details__label"
      v-text="fieldDetail.label"
    >
    </label>
    <input
      type="text"
      v-bind:name="fieldDetail.name"
      class="input main__input field-details__input"
    />
    <legend
      v-if="fieldDetail.legend"
      v-bind:for="fieldDetail.name"
      class="legend main__legend field-details__legend"
      v-text="fieldDetail.legend"
    >
    </legend>
  </div>
</template>

<script>
  export default {
    name: 'field-details-item',
    props: {
      fieldDetail: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import color palette variables
  @import '../../../theme/palette';
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  .field-details__frame {
    flex-flow: row wrap;
    flex: $fill-base;
    margin-bottom: $space-frame;

    @media only screen and (min-width: $tablet) {
      flex: $fill-half;
      padding-left: $space-frame;
    }
  }

  .field-details__label {
    flex: $fill-base;
    margin-bottom: $space-press;
    color: $brand-apex;
    font-size: $space-trim;
    font-weight: $weight-core;
  }

  .field-details__input {
    flex: $fill-base;
    margin-bottom: $space-press;
    padding: $space-frame;
    border: $border-base $loblolly;
    box-shadow: $shadow-base $ground-core inset;
    font-size: $size-legal;
  }

  .field-details__legend {
    flex: $fill-base;
    margin-bottom: $space-press;
    padding: 0;
    font-size: $size-legal;
  }
</style>
