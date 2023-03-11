<template>
   <div>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-btn  v-for="(item,index) in rutas" :key="index"
            class="text-white bg-light-blue-darken-4 my-3 text-black"
            block=""
            @click="url(item.ruta)"
            >
                <span>{{item.nombre}}</span>
            </v-btn >            
        </v-navigation-drawer>
  
      <v-app-bar class="bg-light-blue-darken-4">
        <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
        <v-toolbar-title>Menú</v-toolbar-title>
        <!-- <router-link to="./login"> -->
        <router-link to="./login" style="text-decoration: none;">
            <v-btn variant="outlined"  class="botonn" color="white"  >
                Acceder
            </v-btn>
        </router-link>
      </v-app-bar>
      <v-main>
          <slot name="main"></slot>
      </v-main>
    </v-app>
    <slot name="footer"></slot>
</div>
  </template>

  <style>
    .botonn{
        border-color: white;
        margin-right: 5px;
    }
  </style>
  
  <script>
  export default {
    name: 'VBtn',
    data: ()=> ({drawer: false,
        rutas: [
            {nombre:'Inicio', ruta:'/'},
           // {nombre:'inicio', ruta:'/inicio'},
            {nombre:'contactos', ruta:'/about'},
            {nombre:'ayuda', ruta:'/help'},
            {nombre:'¿quienes somos?', ruta:'/quienes'},
        ]
    }),
    methods: {
        url(ruta){
            this.$router.push(ruta)
        }
    }
}
  </script> 