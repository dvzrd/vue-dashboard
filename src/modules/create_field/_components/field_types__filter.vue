<template>
  <form
    id="field-types-filter"
    class="form form__filter field-types__filter">
    <span class="icon-label icon-label__filter field-types__filter--icon-label">
      <i class="icon fa fa-filter"></i>
    </span>
    <input
      type="text"
      name="filter"
      class="input input__filter field-types__filter--input"
      placeholder="Filter by field type"
    />
  </form>
</template>

<script>
  export default {
    name: 'field-types-filter'
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

  .field-types__filter {
    margin-bottom: 0;
    display: flex;
    flex: $fill-base;
    padding: $space-frame;
    border-bottom: $border-lead $bali;
    background: $ground-base;

    @media only screen and (min-width: $desktop) {
      position: fixed;
      width: $frame-road;
      top: $frame-min;
    }

    .field-types__filter--icon-label {
      padding: $gutter-fit;
      background: $loblolly;
      color: $brand-apex;
    }

    .field-types__filter--input {
      flex: 1;
      padding: $space-frame;
      border: $border-base $loblolly;
      box-shadow: $shadow-base $ground-core inset;
      font-size: $size-legal;
    }
  }
</style>
