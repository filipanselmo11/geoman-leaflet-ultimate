<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar>
        <v-toolbar-title>Geoman Leaflet Vuetify App</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>

    <br />

    <v-main>
      <map-component></map-component>
    </v-main>
  </v-app>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";

export default {
  name: "App",

  components: {
    MapComponent,
  },

  data: () => ({}),
};
</script>
