<template>
  <div
    id="field-details"
    class="wrapper main__wrapper create-field__field-details--main"
  >
    <figure class="container main__container field-details__main--container">
      <figcaption class="caption main__caption field-details__main--caption">
        <h3 class="heading main__heading field-details__main--heading">
          Field Details
        </h3>
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'field-details-container',
    props: {
      config: {
        type: Object
      }
    }
  }
</script>
