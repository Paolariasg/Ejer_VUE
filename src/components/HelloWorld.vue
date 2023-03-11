<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
          <v-toolbar-title class="mt-5 d-flex justify-center text-h5 font-weight-medium text-light-blue-lighten-2">
            Bienvenidos a nuestro sitio web
          </v-toolbar-title>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="22" lg="13">
        <v-carousel :show-arrows="false">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col >
        <v-card>
          <v-card-title class="d-flex justify-center ">Últimas noticias</v-card-title>
          <v-card-text>
            <div class="d-flex justify-space-around mb-6 mt-5">
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="align-end text-white"
                  height="200"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                  Number 10
                </v-card-subtitle>
                <v-card-text>
                  <div>Whitehaven Beach</div>
                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange">
                    Share
                  </v-btn>
                  <v-btn color="orange">
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>

              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="align-end text-white"
                  height="200"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                  Number 10
                </v-card-subtitle>
                <v-card-text>
                  <div>Whitehaven Beach</div>
                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange">
                    Share
                  </v-btn>
                  <v-btn color="orange">
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>

              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-img
                  class="align-end text-white"
                  height="200"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                  Number 10
                </v-card-subtitle>
                <v-card-text>
                  <div>Whitehaven Beach</div>
                  <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="orange">
                    Share
                  </v-btn>
                  <v-btn color="orange">
                    Explore
                  </v-btn>
                </v-card-actions>

              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card>
          <v-card-title class="d-flex justify-center ">Dejanos tu mensaje</v-card-title>
          <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-textarea
                  class="mx-2"
                  label="mensaje"
                  rows="1"
                  prepend-icon="mdi-comment"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-textarea
                  append-icon="mdi-comment"
                  class="mx-2"
                  label="mensaje"
                  rows="1"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-textarea
                  prepend-inner-icon="mdi-comment"
                  class="mx-2"
                  label="mensaje"
                  rows="1"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-textarea
                  append-inner-icon="mdi-comment"
                  class="mx-2"
                  label="mensaje"
                  rows="1"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorl',
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
