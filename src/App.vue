<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar>
        <v-toolbar-title>Geoman Leaflet Vuetify App</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>

    <br />

    <v-main>
      <!-- <other-modal-component></other-modal-component> -->
      <map-component></map-component>
      <modal-map-component></modal-map-component>
    </v-main>
  </v-app>
</template>

<script>
// import OtherModalComponent from './components/OtherModalComponent.vue';
import MapComponent from "./components/MapComponent.vue";
import ModalMapComponent from "./components/ModalMapComponent.vue";
export default {
  name: "App",

  components: {
    MapComponent,
    ModalMapComponent
  },

  data: () => ({
  }),
};
</script>
