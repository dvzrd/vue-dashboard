<template>
  <form
    v-bind:id="config.id"
    v-bind:class="`container ${config.id}__container`"
  >
    <FieldTypesModule />
    <!-- create-field__field-details -->
    <section
      id="config.main"
      v-bind:class="`wrapper main__wrapper ${config.id}__${config.main}--main`"
    >
      <figure v-bind:class="`container main__container ${config.id}__${config.main}--container`">
        <figcaption v-bind:class="`caption main__caption ${config.id}__${config.main}--caption`">
          <h3
            v-bind:class="`heading heading--brief main__heading ${config.id}__${config.main}--heading`"
            v-text="config.name"
          >
          </h3>
        </figcaption>
        <div v-bind:class="`main ${config.id}__main ${config.id}__${config.main}--main`">
          <FieldDetailsList
            :fieldReferenceName="fieldReferenceName"
            :fieldDetails="fieldDetails"
          />
          <FieldTagsModule />
        </div>
      </figure>
    </section>
    <FieldGroupsModule />
  </form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTypesModule from '../field_types';
  import FieldDetailsList from './_components/field_details__list';
  import FieldTagsModule from '../field_tags';
  import FieldGroupsModule from '../field_groups';
  export default {
    name: 'create-field-container',
    components: {
      FieldTypesModule,
      FieldDetailsList,
      FieldTagsModule,
      FieldGroupsModule
    },
    computed: {
      ...mapGetters({
        config: '$_createField/config',
        fieldDetails: '$_createField/fieldDetails',
        fieldReferenceName: '$_createField/fieldReferenceName'
      })
    },
    created() {
      this.$store.registerModule('$_createField', store);
    },
    mounted() {
      this.$store.dispatch('$_createField/getConfig');
      this.$store.dispatch('$_createField/getFieldDetails');
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

  // TODO: create modular dashboard components that share similar styles

  .main__wrapper {
    @media only screen and (min-width: $phablet) {
      order: 3;
    }

    @media only screen and (min-width: $tablet) {
      margin-right: $frame-rec;
    }

    @media only screen and (min-width: $desktop) {
      flex: 2;
      margin-top: $space-push;
      border-left: $border-dash $bali;
    }
  }

  .main__container {
    align-content: flex-start;
  }

  .main__caption {
    z-index: 3;
    width: 100%;
    flex: $fill-base;
    padding: $space-frame;
    background: $bayoux;

    @media only screen and (min-width: $desktop) {
      position: fixed;
      top: $space-shove;
    }
  }

  .main__heading {
    margin: 0;
    color: $athens;
    font-size: $space-trim;
    text-transform: uppercase;
  }

  .create-field__main {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    align-content: flex-start;
    max-width: $container-base;

    @media only screen and (min-width: $tablet) {
      max-width: $container-tablet;
    }

    @media only screen and (min-width: $laptop) {
      max-width: $container-laptop;
    }

    @media only screen and (min-width: $desktop) {
      margin-top: $space-core;
    }
  }
</style>
