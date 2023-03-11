<template>
    <FooT />
  </template>
  
<script>
  import { defineComponent } from 'vue';
  
  // Components
  import FooT from '../components/FooTer.vue';
  
  export default defineComponent({
    name: 'FooterView',
  
    components: {
        FooT,
    },
  });
</script>