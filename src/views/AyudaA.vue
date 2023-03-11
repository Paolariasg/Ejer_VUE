<template>
  <NavBar>
    <template v-slot:footer>
        <FooT />
    </template>
    <template v-slot:main>
        <HelpV />
    </template>
  </NavBar>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  // Components
  import HelpV from '../components/HelpV.vue';
  import NavBar from '../components/NavBar.vue';
  import FooT from '@/components/FooTer.vue';


  
  export default defineComponent({
    name: 'AyudaView',
  
    components: {
      HelpV,
      NavBar,
      FooT,

    },
  });
</script>