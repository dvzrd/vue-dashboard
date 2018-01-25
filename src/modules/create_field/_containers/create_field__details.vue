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
      <h5 class="heading heading--point main__heading create-field__field-details--heading">
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
        <p>Select a group to see individual tags</p>
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
