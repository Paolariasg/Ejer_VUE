<template>
    <NavBar>
      <template v-slot:footer>
            <FooT />
        </template>
        <template v-slot:main>
            <HelloWorld />
        </template>
    </NavBar>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import NavBar from '../components/NavBar.vue';
  import FooT from '@/components/FooTer.vue';
  import HelloWorld from '@/components/HelloWorld.vue';

  
  export default defineComponent({
    name: 'InicioNav',
  
    components: {
      NavBar,
      FooT,
      HelloWorld,

    },
  });
  </script>
  