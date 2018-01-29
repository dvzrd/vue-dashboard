<template>
  <section
    v-bind:id="config.id"
    v-bind:class="`container ${config.pattern}__container ${config.parent}__${config.id}--container`"
  >
    <h5
      v-bind:class="`heading heading--base ${config.pattern}__heading`"
      v-text="config.name"
    >
    </h5>
    <figure v-bind:class="`frame ${config.pattern}__frame ${config.id}__${config.pattern}--frame`">
      <figcaption
        v-bind:class="`caption ${config.pattern}__caption ${config.id}__${config.pattern}--caption`"
        v-text="config.caption"
      >
      </figcaption>
      <FieldTagsGroups
        :selectedFieldTagsGroup="selectedFieldTagsGroup"
        :fieldTagsGroups="fieldTagsGroups"
      />
    </figure>
    <figure v-bind:class="`frame ${config.pattern}__frame ${config.id}__${config.pattern}--frame`">
      <figcaption
        v-bind:class="`caption ${config.pattern}__caption ${config.id}__${config.pattern}--caption`"
        v-text="config.name"
      >
      </figcaption>
      <FieldTagsList
        :selectedFieldTagsGroup="selectedFieldTagsGroup"
        :fieldTags="fieldTags"
      />
      <p
        v-if="selectedFieldTagsGroup.length === 0"
        v-bind:class="`context context--hint ${config.pattern}__hint ${config.id}__${config.pattern}--hint`"
        v-text="config.hint"
      >
      </p>
    </figure>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import FieldTagsGroups from './_components/field_tags__groups';
  import FieldTagsList from './_components/field_tags__list';
  export default {
    name: 'field-tags-module',
    components: {
      FieldTagsGroups,
      FieldTagsList
    },
    computed: {
      ...mapGetters({
        config: '$_fieldTags/config',
        fieldTags: '$_fieldTags/fieldTags',
        fieldTagsGroups: '$_fieldTags/fieldTagsGroups',
        selectedFieldTagsGroup: '$_fieldTags/selectedFieldTagsGroup'
      })
    },
    created() {
      this.$store.registerModule('$_fieldTags', store);
    },
    mounted() {
      this.$store.dispatch('$_fieldTags/getConfig');
      this.$store.dispatch('$_fieldTags/getFieldTags');
      this.$store.dispatch('$_fieldTags/getFieldTagsGroups');
    }
  }
</script>

<style lang="scss" scoped>
  // import design structure variables
  @import '../../theme/structure';
  // import design composition variables
  @import '../../theme/composition';
  // import design content variables
  @import '../../theme/content';

  // TODO: create reusable dashboard components and import them into this container
  .tags__container {
    display: flex;
    max-width: $container-base;
    padding: $space-frame;

    @media only screen and (min-width: $tablet) {
      max-width: $container-tablet;
    }

    @media only screen and (min-width: $laptop) {
      max-width: $container-laptop;
    }
  }

  .tags__heading {
    margin-top: $space-split;
    font-size: $size-base;
  }

  .tags__frame {
    flex: $fill-base;
    flex-flow: row wrap;
    align-content: flex-start;

    @media only screen and (min-width: $phablet) {
      flex: 1;
    }
  }

  .tags__caption {
    flex: $fill-base;
    margin-bottom: $space-split;
    font-size: $space-trim;
  }

  .tags__hint {
    margin-bottom: $space-press;
    font-size: $size-legal;
  }
</style>
