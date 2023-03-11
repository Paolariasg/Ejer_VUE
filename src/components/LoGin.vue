<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Iniciar sesión</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="username"
                  :counter="20"
                  label="Nombre de usuario"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :counter="20"
                  label="Contraseña"
                  type="password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                :disabled="!valid"
                @click="login"
              >
                Iniciar sesión
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      valid: false,
    };
  },
  methods: {
    login() {
      // Aquí iría el código para enviar los datos al servidor
      console.log(`Iniciando sesión con ${this.username} y ${this.password}`);
    },
  },
};
</script>
