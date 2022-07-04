<template>
  <v-container>
    <v-card>
      <div id="map"></div>
    </v-card>
  </v-container>
</template>

<script>
import "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-sidebar-v2";
import "leaflet-sidebar-v2/css/leaflet-sidebar.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

const L = window["L"];

// const L = window.L;

// var L = window.L;

// var L = window["L"];

// const rightSidebar = L.control.sidebar({
//   autopan: false,
//   closeButton: true,
//   container: "sidebar",
//   position: "right",
// });

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "MapComponent",
  // props:{},
  data: () => ({
    map: null,
    rightSidebar: L.control.sidebar({
      autopan: false,
      closeButton: true,
      container: "sidebar",
      position: "right",
    }),

    layerControl: null,
    // editableLayers: null,
  }),
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map("map", { pmIgnore: false }).setView([-25.441105, -49.276855], 13);
      this.rightSidebar.addTo(this.map);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // L.marker([51.50915, -0.096112], { pmIgnore: true }).addTo(this.map);
      L.PM.setOptIn(true);
      L.PM.setOptIn(false);
      this.map.on("pm:create", (e) => {
        e.layer.setStyle({ pmIgnore: false });
        L.PM.reInitLayer(e.layer);
      });
      this.map.pm.addControls({
        position: "topleft",
        drawMarker: false,
        drawPolygon: true,
        drawPolyline: false,
        drawCircle: true,
        editPolygon: true,
        deleteLayer: false,
        drawRectangle: true,
        dragMode: false,
        cutPolygon: false,
        drawCircleMarker: false,
        drawText: false,
        rotateMode: false,
      });
      this.map.pm.setGlobalOptions({
        allowSelfIntersection: false,
        finishOn: "dblclick",
      });
      //   this.map.pm.removeControls();
      // this.map.pm.toggleControls();
      this.map.pm.controlsVisible();
      // this.layerControl = L.control.layers()
    },
  },
};
</script>

<style scoped>
#map {
  height: 600px;
}
.leaflet-sidebar {
  position: absolute;
  top: 20px;
  right: 15px;
  max-width: 250px;
  height: 75vh;
  overflow: hidden;
  z-index: 1999;
  background-color: transparent;
  overflow-y: auto;
  border: 1px solid red;
}
</style>
