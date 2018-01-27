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
    <!-- TODO: render inputs using vue computed method instead of conditionals -->
    <input
      v-if="!fieldDetail.action && !fieldDetail.model"
      type="text"
      v-bind:ref="fieldDetail.name"
      v-bind:name="fieldDetail.name"
      class="input main__input field-details__input"
    />
    <!-- field-details-label input -->
    <input
      v-if="fieldDetail.id === 'field-details-label'"
      type="text"
      v-bind:ref="fieldDetail.id"
      v-bind:name="fieldDetail.name"
      class="input main__input field-details__input"
      @blur="updateFieldReferenceName"
    />
    <!-- field-details-ref input -->
    <input
      v-if="fieldDetail.id === 'field-details-ref'"
      type="text"
      v-bind:ref="fieldDetail.id"
      v-bind:name="fieldDetail.name"
      v-bind:value="'add-reference-name-here'"
      class="input main__input field-details__input"
    />
    <!-- field-details-regex input -->
    <input
      v-if="fieldDetail.id === 'field-details-regex'"
      type="text"
      v-bind:ref="fieldDetail.id"
      v-bind:name="fieldDetail.name"
      @blur="validateFieldRegexValue"
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
    },
    methods: {
      updateFieldReferenceName (event) {
        // TODO: refactor to use `fieldDetail.id` to get refs value
        // this can be done inside computed method when refactoring above template conditions
        const displayLabel = this.$refs['field-details-label'].value;

        console.log('store display-label value on blur', displayLabel);
        // this.$store.commit('updateReferenceName', displayLabel);
      },
      validateFieldRegexValue (event) {
        const customValidation = this.$refs['field-details-regex'].value;

        console.log('if not regex string - show error', customValidation);
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
