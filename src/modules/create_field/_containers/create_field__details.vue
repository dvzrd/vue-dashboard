<template>
  <section
    id="field-details"
    class="wrapper main__wrapper create-field__field-details--main"
  >
    <header class="header main__header create-field__field-details--header">
      <h3 class="heading heading--brief main__heading create-field__field-details--heading">
        Field Details
      </h3>
    </header>
    <FieldDetailsList
      :fieldDetails="fieldDetails"
    />
    <!-- field-tags-container -->
    <footer class="footer main__footer create-field__field-details--footer">
      <h5 class="heading heading--base main__footer--heading">
        Tags
      </h5>
      <figure class="frame main__frame create-field__field-details--tags">
        <figcaption class="main__caption create-field__field-details--caption">
          Tag Group
        </figcaption>
        <FieldTagsList
          :fieldTags="fieldTags"
        />
      </figure>
      <figure class="tags main__frame create-field__field-details--tags">
        <figcaption class="main__caption create-field__field-details--caption">
          Tags
        </figcaption>
        <p class="context context--hint main__hint create-field__field-details--hint">
          Select a group to see individual tags
        </p>
        <FieldTagsList
          :fieldTags="fieldTags"
        />
      </figure>
    </footer>
  </section>
</template>

<script>
  import FieldDetailsList from '../_components/field_details__list';
  import FieldTagsList from '../_components/field_tags__list';
  export default {
    name: 'field-details-container',
    components: {
      FieldDetailsList,
      FieldTagsList
    },
    props: {
      config: {
        type: Object
      },
      fieldDetails: {
        type: Array
      },
      fieldTags: {
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

  .main__footer {
    display: flex;
    padding: $space-frame;
  }

  .main__footer--heading {
    margin-top: $space-split;
    font-size: $size-base;
  }

  .main__frame {
    flex: $fill-base;
    flex-flow: row wrap;
    align-content: flex-start;

    @media only screen and (min-width: $phablet) {
      flex: 1;
    }
  }

  .main__caption {
    flex: $fill-base;
    margin-bottom: $space-split;
    font-size: $space-trim;
  }

  .main__hint {
    margin-bottom: $space-press;
    font-size: $space-trim;
  }
</style>
