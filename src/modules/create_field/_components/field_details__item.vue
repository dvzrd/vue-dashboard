<template>
  <div
    v-bind:id="fieldDetail.id"
    class="frame main__frame field-details__frame">
    <label
      v-bind:for="fieldDetail.name"
      class="label main__label field-details__label"
      v-text="fieldDetail.label"
    >
    </label>
    <input
      type="text"
      v-bind:name="fieldDetail.name"
      class="input main__input field-details__input"
    />
    <legend
      v-if="fieldDetail.legend"
      v-bind:for="fieldDetail.name"
      class="legend main__legend field-details__legend"
      v-text="fieldDetail.legend"
    >
    </legend>
  </div>
</template>

<script>
  export default {
    name: 'field-details-item',
    props: {
      fieldDetail: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for field-details-item
</style>
