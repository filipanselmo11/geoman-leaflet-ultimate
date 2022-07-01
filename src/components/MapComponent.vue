<template>
  <v-container>
    <v-card>
      <div id="map"></div>
    </v-card>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

const L = window["L"];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "MapComponent",
  data: () => ({
    map: null,
  }),
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map("map", { pmIgnore: false }).setView([40.0269319, 32.83604819], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      L.marker([51.50915, -0.096112], { pmIgnore: true }).addTo(this.map);
      L.PM.setOptIn(true);
      L.PM.setOptIn(false);
      this.map.on("pm:create", (e) => {
        e.layer.setStyle({ pmIgnore: false });
        L.PM.reInitLayer(e.layer);
      });
      this.map.pm.addControls({
        position: "topleft",
      });
    //   this.map.pm.removeControls();
    // this.map.pm.toggleControls();
    this.map.pm.controlsVisible();
    },
  },
};
</script>

<style scoped>
#map {
  height: 600px;
}
</style>
