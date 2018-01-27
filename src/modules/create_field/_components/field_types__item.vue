<template>
  <li
    v-bind:id="fieldType.id"
    class="item toolbar__item field-types__item"
    v-on:click="handleSelectFieldType"
  >
    <figure class="card toolbar__card field-types__item--card">
      <figcaption class="caption toolbar__item--caption field-types__item--caption">
        <i
          v-bind:class="`icon fa ${fieldType.icon}`"
        ></i>
        <span
          class="caption-label toolbar__item--caption-label field-types__item--caption-label"
          v-text="fieldType.type"
        >
        </span>
      </figcaption>
      <small class="hint toolbar__item--hint field-types__item--hint">
        Description
      </small>
      <p
        class="context toolbar__item--context field-types__item--context"
        v-text="fieldType.desc">
      </p>
      <small class="subheading toolbar__item--hint field-types__item--hint">
        Default Display
      </small>
      <p
        class="context toolbar__item--context field-types__item--context"
        v-text="fieldType.default">
      </p>
    </figure>
  </li>
</template>

<script>
  export default {
    name: 'field-types-item',
    props: {
      fieldType: {
        type: Object
      }
    },
    methods: {
      handleSelectFieldType () {
        const selectedFieldType = this.fieldType;
        console.log('store this.fieldType to selectedFieldType state', selectedFieldType);
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

  .field-types__item {
    display: flex;
    margin-bottom: $space-frame;

    @media only screen and (min-width: $phablet) {
      flex: $fill-half;
      padding-left: $space-frame;
    }

    @media only screen and (min-width: $laptop) {
      flex: $fill-third;
    }

    @media only screen and (min-width: $desktop) {
      flex: $fill-base;
    }

    &.selected {
      order: 1;
      flex: $fill-base;

      @media only screen and (min-width: $laptop) {
        flex: $fill-half;
      }

      .field-types__item--card {
        background: $lynch;
      }
    }
  }

  .field-types__item--card {
    cursor: pointer;
    margin: 0;
    padding: $space-frame;
    background: $ground-base;
    transition: $shift-base;

    &:hover {
      box-shadow: $shadow-dash $cadet;
      background: $loblolly;
    }
  }

  .field-types__item--caption {
    margin-bottom: $space-split;
    font-size: $size-base;
  }

  .field-types__item--caption-label {
    margin-left: $space-press;
    font-weight: $weight-heavy;
    text-transform: capitalize;
  }

  .field-types__item--hint {
    display: block;
    margin-top: $space-frame;
  }

  .field-types__item--context {
    margin: 0;
    color: $bond-apex;
    font-size: $size-card;
    font-weight: $weight-core;
    line-height: $height-core;
  }
</style>
