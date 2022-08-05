<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar>
        <v-toolbar-title>Geoman Leaflet Vuetify App</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>

    <br />

    <v-main>
      <!-- <other-map-component></other-map-component> -->
      <!-- <map-component></map-component> -->
      <!-- <speedial-component></speedial-component> -->
      <dial-component></dial-component>
    </v-main>
  </v-app>
</template>

<script>
// import OtherMapComponent from './components/OtherMapComponent.vue';
// import MapComponent from "./components/MapComponent.vue";
// import SpeedialComponent from "./components/SpeedialComponent.vue";

import DialComponent from "./components/DialComponent.vue";

export default {
  name: "App",

  components: { DialComponent },

  data: () => ({}),
};
</script>
