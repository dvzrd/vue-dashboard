<template>
  <aside
    id="field-groups"
    class="wrapper sidebar__wrapper create-field__field-groups--sidebar"
  >
    <figure class="container sidebar__container field-groups__sidebar--container">
      <figcaption class="caption sidebar__caption field-groups__sidebar--caption">
        <h3 class="heading sidebar__heading field-groups__sidebar--heading">
          Field Groups
        </h3>
      </figcaption>
      <FieldGroupsList
        :fieldGroups="fieldGroups"
      />
      <footer class="footer sidebar__footer field-groups__sidebar--footer">
        <mark class="hint sidebar__hint field-groups__sidebar--hint">
          Choose a group for this field
        </mark>
        <button
          type="button"
          class="button button--brand sidebar__button field-groups__sidebar--button"
        >
          Create New Group
        </button>
      </footer>
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

<style lang="scss" scoped>
  // import color palette variables
  @import '../../../theme/palette';
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  .sidebar__wrapper {
    background: $loblolly;
    z-index: 4;

    @media only screen and (min-width: $phablet) {
      flex: 1;
      order: 2;
      position: relative;
      align-items: flex-start;
      border-bottom: $border-dash $bali;
    }

    @media only screen and (min-width: $tablet) {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: $frame-rec;
      border-left: $border-dash $bali;
      border-bottom: 0;
    }
  }

  .sidebar__container {
    height: 100%;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: stretch;
    background: $ground-base;
  }

  .sidebar__caption {
    flex: $fill-base;
    padding: $space-frame;
    background: $lynch;

    @media only screen and (min-width: $tablet) {
      margin-top: $space-shove;
    }
  }

  .sidebar__heading {
    margin: 0;
    color: $athens;
    font-size: $space-trim;
    text-transform: uppercase;

    @media only screen and (min-width: $phablet) {
      text-align: right;
    }
  }

  .sidebar__footer {
    flex: $fill-base;
    padding: $space-frame;
    background: transparent;
    text-align: center;

    @media only screen and (min-width: $phablet) {
      position: absolute;
      bottom: 0;
    }
  }

  .sidebar__hint {
    width: 100%;
    display: block;
    background: transparent;
    text-align: center;
    font-size: $size-meta;
    margin-bottom: $space-frame;
  }

  .sidebar__button {
    width: 100%;
    margin: 0;
    padding: $space-base;
    flex: $fill-base;
    font-size: $space-trim;
  }
</style>
