<template>
  <li
    v-bind:id="fieldDetail.id"
    class="frame main__frame field-details__frame">
    <figure class="field main__field field-details__field">
      <figcaption
        v-if="fieldDetail.caption"
        class="caption main__caption field-details__caption"
        v-text="fieldDetail.caption"
      >
      </figcaption>
      <label
        v-bind:for="fieldDetail.name"
        class="label main__label field-details__label"
        v-text="fieldDetail.label"
      >
      </label>
      <mark
        v-if="fieldDetail.error"
        class="alert fail__alert field-details__alert"
        v-text="fieldDetail.error"
      >
      </mark>
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
        v-on:blur="handleSetFieldReferenceName"
      />
      <!-- field-details-ref input -->
      <input
        v-if="fieldDetail.id === 'field-details-ref'"
        type="text"
        v-bind:ref="fieldDetail.id"
        v-bind:name="fieldDetail.name"
        v-bind:value="fieldReferenceName"
        class="input main__input field-details__input"
      />
      <!-- field-details-regex input -->
      <input
        v-if="fieldDetail.id === 'field-details-regex'"
        type="text"
        v-bind:ref="fieldDetail.id"
        v-bind:name="fieldDetail.name"
        v-on:blur="handleValidateFieldRegexValue"
        class="input main__input field-details__input"
      />
      <legend
        v-if="fieldDetail.legend"
        v-bind:for="fieldDetail.name"
        class="legend main__legend field-details__legend"
        v-text="fieldDetail.legend"
      >
      </legend>
    </figure>
  </li>
</template>

<script>
  import { kebabCase, validateRegex } from '../../../utils';
  export default {
    name: 'field-details-item',
    props: {
      fieldDetail: {
        type: Object
      },
      fieldReferenceName: {
        type: String
      }
    },
    methods: {
      handleSetFieldReferenceName (event) {
        // TODO: refactor to use `fieldDetail.id` to get refs value
        // this can be done inside computed method when refactoring above template conditions
        const labelValue = this.$refs['field-details-label'].value;
        // TODO: also check if refName.value exists before running setFieldReferenceName
        // const refName = document.getElementById(this.$el.nextSibling.id)
        if (this.fieldReferenceName.length === 0) {
          const fieldReferenceName = kebabCase(labelValue);
          this.$store.dispatch('$_createField/setFieldReferenceName', fieldReferenceName);
        }
      },
      handleValidateFieldRegexValue (event) {
        const regexValue = this.$refs['field-details-regex'].value;
        if (regexValue.length > 0) {
          const valid = validateRegex(regexValue);
          if (!valid) {
            console.log('regex error', regexValue);
            // TODO: dispatch error handler from store
            const alert = this.$refs['field-details-regex'].previousElementSibling;
            alert.classList.add('show');
          } else {
            console.log('regex value', regexValue);
          }
        }
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

      &#field-details-value,
      &#field-details-regex {
        flex: $fill-base;
      }
    }
  }

  .field-details__field {
    display: flex;
    flex-flow: row wrap;
  }

  .field-details__label {
    flex: $fill-base;
    margin-bottom: $space-press;
    color: $brand-apex;
    font-size: $space-trim;
    font-weight: $weight-core;
  }

  .field-details__alert {
    display: none;
    background: transparent;
    color: $serve-fail;
    flex: $fill-base;
    margin-bottom: $space-press;
    font-size: $size-legal;

    &.show {
      display: block;
    }
  }

  .field-details__input {
    flex: $fill-base;
    padding: $space-frame;
    border: $border-base $loblolly;
    box-shadow: $shadow-base $ground-core inset;
    font-size: $size-legal;

    @media only screen and (min-width: $tablet) {
      #field-details-value &,
      #field-details-regex & {
        width: 49%;
        flex: none;
      }
    }
  }

  .field-details__legend {
    flex: $fill-base;
    margin: $space-press 0;
    padding: 0;
    font-size: $size-legal;
  }
</style>
