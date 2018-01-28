<template>
  <form
    v-bind:id="config.id"
    v-bind:class="`container ${config.id}__container`"
  >
    <FieldTypesModule />
    <!-- create-field__field-details -->
    <section
      id="field-details"
      v-bind:class="`wrapper main__wrapper ${config.id}__field-details--main`"
    >
      <header v-bind:class="`header main__header ${config.id}__field-details--header`">
        <h3
          v-bind:class="`heading heading--brief main__heading ${config.id}__field-details--heading`"
        >
          Field Details
        </h3>
      </header>
      <FieldDetailsList
        :fieldDetails="fieldDetails"
      />
      <FieldTagsModule />
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
    align-content: flex-start;

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

  .main__header {
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
</style>
