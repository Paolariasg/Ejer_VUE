<template>
    <NavBar>
        <template v-slot:main>
            <LoGin />
        </template>
    </NavBar>
  </template>
  
<script>
  import { defineComponent } from 'vue';
  
  // Components
  import LoGin from '../components/LoGin.vue';
  import NavBar from '@/components/NavBar.vue';
  
  
  export default defineComponent({
    name: 'LoginView',
  
    components: {
      LoGin,
      NavBar,
    },
  });
</script>