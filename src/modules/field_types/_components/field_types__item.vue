<template>
  <li
    v-bind:id="fieldType.id"
    v-bind:class="{
      'item toolbar__item field-types__item': true,
      'selected': selected,
      'filtered': filtered
    }"
    v-on:click="handleSelectFieldType"
  >
    <figure class="card toolbar__card field-types__item--card">
      <figcaption class="caption toolbar__item--caption field-types__item--caption">
        <i
          v-bind:class="`icon fa ${fieldType.icon}`"
        >
        </i>
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
        v-text="fieldType.desc"
      >
      </p>
      <small class="subheading toolbar__item--hint field-types__item--hint">
        Default Display
      </small>
      <p
        class="context toolbar__item--context field-types__item--context"
        v-text="fieldType.default"
      >
      </p>
    </figure>
  </li>
</template>

<script>
  export default {
    name: 'field-types-item',
    props: {
      selected: {
        type: Boolean
      },
      filtered: {
        type: Boolean
      },
      fieldType: {
        type: Object
      }
    },
    methods: {
      handleSelectFieldType () {
        const fieldTypeId = this.fieldType.id;
        this.$store.dispatch('$_fieldTypes/selectFieldType', fieldTypeId);
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

  // field-types-item layout
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
  }

  // field types item card
  .field-types__item--card {
    cursor: pointer;
    margin: 0;
    padding: $space-frame;
    background: $athens;
    transition: $shift-base;

    &:hover {
      box-shadow: $shadow-dash $cadet;
      background: $loblolly;
    }

    .selected & {
      background: $lynch;
      color: $loblolly;
    }

    .filtered & {
      display: none;
    }
  }

  .field-types__item--caption {
    margin-bottom: $space-split;
    font-size: $size-base;

    .selected & {
      color: $athens;
    }
  }

  .field-types__item--caption-label {
    margin-left: $space-press;
    transition: $shift-base;
    font-weight: $weight-heavy;
    text-transform: capitalize;

    .selected & {
      color: $athens;
    }
  }

  .field-types__item--hint {
    display: block;
    margin-top: $space-frame;
  }

  .field-types__item--context {
    margin: 0;
    transition: $shift-base;
    color: $bond-apex;
    font-size: $size-card;
    font-weight: $weight-core;
    line-height: $height-core;

    .selected & {
      color: $light;
    }
  }
</style>
