<template>
  <NavBar>
    <template v-slot:footer>
            <FooT />
        </template>
    <template v-slot:main>
        <QuienesS />
    </template>
  </NavBar>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import QuienesS from '@/components/QuienesS.vue';
import FooT from '@/components/FooTer.vue';


export default defineComponent({
  name: 'QuienesSomos',

  components: {
    NavBar,
    QuienesS,
    FooT,
  },
});
</script>