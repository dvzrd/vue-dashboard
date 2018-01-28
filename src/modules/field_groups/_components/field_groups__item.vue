<template>
  <li
    v-bind:id="fieldGroup.id"
    v-bind:class="{
      'item toolbar__item field-groups__item': true,
      'selected': selected
    }"
    v-on:click="handleSelectFieldGroup"
  >
    <h4
      class="field-groups__heading"
      v-text="fieldGroup.name"
    >
    </h4>
    <p class="field-groups__context">
      <span
        class="field-groups__meta"
        v-text="fieldGroup.inputCount"
      ></span>
      other inputs
    </p>
  </li>
</template>

<script>
  export default {
    name: 'field-groups-item',
    props: {
      selected: {
        type: Boolean
      },
      fieldGroup: {
        type: Object
      }
    },
    methods: {
      handleSelectFieldGroup () {
        const fieldGroupId = this.fieldGroup.id;
        this.$store.dispatch('$_fieldGroups/selectFieldGroup', fieldGroupId);
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import color palette variables
  @import '../../../theme/palette';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  .field-groups__item {
    cursor: pointer;
    flex: $fill-base;
    margin-bottom: $space-frame;
    padding: $space-frame;
    background: $athens;
    transition: $shift-base;

    &:hover {
      box-shadow: $shadow-dash $cadet;
      background: $loblolly;
    }

    &.selected {
      background: $lynch;
    }
  }

  .field-groups__heading {
    margin-bottom: $space-split;
    font-size: $space-trim;

    .selected & {
      color: $light;
    }
  }

  .field-groups__context {
    margin: 0;
    font-size: $size-legal;
    line-height: $height-core;

    .selected & {
      color: $loblolly;
    }
  }

  .field-groups__meta {

    .selected & {
      color: $loblolly;
    }
  }
</style>
