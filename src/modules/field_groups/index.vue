<template>
  <aside
    v-bind:id="config.id"
    v-bind:class="`wrapper ${config.pattern}__wrapper ${config.parent}__${config.id}--${config.pattern}`"
  >
    <figure v-bind:class="`container ${config.pattern}__container ${config.id}__${config.pattern}--container`">
      <figcaption v-bind:class="`caption ${config.pattern}__caption ${config.id}__${config.pattern}--caption`">
        <h3
          v-bind:class="`heading ${config.pattern}__heading ${config.id}__${config.pattern}--heading`"
          v-text="config.name"
        >
        </h3>
      </figcaption>
      <FieldGroupsList
        :selectedFieldGroup="selectedFieldGroup"
        :fieldGroups="fieldGroups"
      />
      <footer v-bind:class="`footer ${config.pattern}__footer ${config.id}__${config.pattern}--footer`">
        <mark
          v-bind:class="`hint ${config.pattern}__hint ${config.id}__${config.pattern}--hint`"
          v-text="config.hint"
        >
        </mark>
        <button
          type="button"
          v-bind:class="`button button--brand ${config.pattern}__button ${config.id}__${config.pattern}--button`"
          v-text="config.cta"
          v-on:click="handleCreateNewFieldGroup"
        >
        </button>
      </footer>
    </figure>
  </aside>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldGroupsList from './_components/field_groups__list'
  export default {
    name: 'field-groups-module',
    components: {
      FieldGroupsList
    },
    computed: {
      ...mapGetters({
        config: '$_fieldGroups/config',
        fieldGroups: '$_fieldGroups/fieldGroups',
        selectedFieldGroup: '$_fieldGroups/selectedFieldGroup'
      })
    },
    methods: {
      handleCreateNewFieldGroup () {
        this.$store.dispatch('$_fieldGroups/createNewFieldGroup');
        console.log('show create new field group form');
      }
    },
    created() {
      this.$store.registerModule('$_fieldGroups', store);
    },
    mounted() {
      this.$store.dispatch('$_fieldGroups/getConfig');
      this.$store.dispatch('$_fieldGroups/getFieldGroups');
    }
  }
</script>

<style lang="scss" scoped>
  // import color palette variables
  @import '../../theme/palette';
  // import design structure variables
  @import '../../theme/structure';
  // import design composition variables
  @import '../../theme/composition';
  // import design content variables
  @import '../../theme/content';

  // TODO: create reusable dashboard components and import them into this container
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
    font-size: $size-legal;
    margin-bottom: $space-split;
  }

  .sidebar__button {
    width: 100%;
    margin: 0;
    padding: $space-base;
    flex: $fill-base;
    font-size: $space-trim;
  }
</style>
