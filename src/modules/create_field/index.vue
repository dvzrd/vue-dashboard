<template>
  <section
    v-bind:id="config.id"
    class="container create-field__container"
  >
    <Hero />
    <FieldTypesContainer :fieldTypes="fieldTypes" />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import Hero from '@/components/hero';
  import FieldTypesContainer from './_containers/create_field__types';
  export default {
    name: 'create-field-container',
    components: {
      Hero,
      FieldTypesContainer
    },
    computed: {
      ...mapGetters({
        config: '$_createField/config',
        fieldTypes: '$_createField/fieldTypes'
      })
    },
    created() {
      this.$store.registerModule('$_createField', store);
      console.log(this.$store)
    },
    mounted() {
      this.$store.dispatch('$_createField/getConfig');
      this.$store.dispatch('$_createField/getFieldTypes');
    }
  }
</script>
