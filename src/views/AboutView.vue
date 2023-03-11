<template>
  <NavBar>
    <template v-slot:footer>
      <FooT />
    </template>
    <template v-slot:main>
        <ContactoV />
    </template>
  </NavBar>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import ContactoV from '@/components/ContactoV.vue';
import FooT from '@/components/FooTer.vue';


export default defineComponent({
  name: 'QuienesSomos',

  components: {
    NavBar,
    ContactoV,
    FooT,
    
  },
});
</script>