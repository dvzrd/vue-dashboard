<template>
  <footer class="footer actions__footer create-field__actions">
    <figure class="container actions__container create-field__actions">
      <button
        type="submit"
        class="button button--pass actions__button create-field__button--save"
        v-on:click="handleSaveChanges"
      >
        Save Changes
      </button>
      <button
        type="button"
        class="button button--ground actions__button create-field__button--cancel"
        v-on:click="handleCancelChanges"
      >
        Cancel Changes
      </button>
      <button
        type="button"
        class="button button--fail actions__button create-field__button--delete"
        v-on:click="handleDeleteField"
      >
        Delete Field
      </button>
    </figure>
  </footer>
</template>


<script>
  export default {
    name: 'create-field-actions',
    methods: {
      handleSaveChanges (event) {
        event.preventDefault();
        // TODO: remove _ (private) from module store namspace for public values
        const newField = {
          fieldType: this.$store.state.$_fieldTypes.selectedFieldType,
          fieldGroup: this.$store.state.$_fieldGroups.selectedFieldGroup,
          fieldLabel: document.getElementsByName('display-label')[0].value,
          fieldRef: document.getElementsByName('reference-name')[0].value,
          fieldValue: document.getElementsByName('default-value')[0].value,
          fieldRegex: document.getElementsByName('custom-validation')[0].value,
          tagsGroup: this.$store.state.$_fieldTags.selectedFieldTagsGroup
        };
        console.log('if valid - save new field data with api call to server', newField);
      },
      handleCancelChanges (event) {
        console.log('reset store and go back to previous dashboard view');
      },
      handleDeleteField (event) {
        console.log('remove field from active database, reset store and go back to previous dashboard view');
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

  .actions__footer {
    order: 4;
    z-index: 5;
    width: 100%;
    background: $brand-contrast;

    @media only screen and (min-width: $tablet) {
      max-width: $phablet;
      background: transparent;
    }

    @media only screen and (min-width: $desktop) {
      z-index: 3;
      bottom: 0;
      position: fixed;
      max-width: none;
      background: $ground-base;
      border-top: $border-dash $bali;
    }
  }

  .actions__container {
    padding: $space-frame;

    @media only screen and (min-width: $desktop) {
      justify-content: flex-end;
      padding-right: $frame-tools;

      .reduce & {
        padding-right: $frame-reduce;
      }
    }
  }

  .actions__button {
    flex: $fill-base;
    margin-bottom: $space-base;
    padding: $space-base;
    font-size: $space-trim;

    @media only screen and (min-width: $phablet) {
      flex: 1;
      margin: 0;
      margin-right: $space-frame;

      &:last-child {
        margin-right: 0;
      }

      &.button--ground {
        border: $border-dash $bali;
      }
    }

    @media only screen and (min-width: $desktop) {
      flex: none;
      align-self: flex-start;
      padding-left: $space-mast;
      padding-right: $space-mast;

      &.button--pass {
        position: absolute;
        left: $space-frame;
      }
    }
  }
</style>
