<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar>
        <v-toolbar-title>Geoman Leaflet Vuetify App</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>

    <br />

    <v-main>
      <button-component></button-component>
      <!-- <button-menu-component></button-menu-component> -->
      <!-- <menu-component></menu-component> -->
      <!-- <other-dial-component></other-dial-component> -->
      <!-- <disabled-button-component></disabled-button-component> -->
      <!-- <playground-component></playground-component> -->
      <!-- <other-map-component></other-map-component> -->
      <!-- <map-component></map-component> -->
      <!-- <speedial-component></speedial-component> -->
      <!-- <dial-component></dial-component> -->
    </v-main>
  </v-app>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';
// import ButtonMenuComponent from './components/ButtonMenuComponent.vue';
// import OtherDialComponent from './components/OtherDialComponent.vue';
// import DisabledButtonComponent from './components/DisabledButtonComponent.vue';
// import PlaygroundComponent from './components/PlaygroundComponent.vue';
// import OtherMapComponent from './components/OtherMapComponent.vue';
// import MapComponent from "./components/MapComponent.vue";
// import SpeedialComponent from "./components/SpeedialComponent.vue";

// import MenuComponent from "./components/MenuComponent.vue"

// import DialComponent from "./components/DialComponent.vue";

export default {
  name: "App",

  components: { ButtonComponent  },

  data: () => ({}),
};
</script>
