<template>
    <div id="map">
    </div>
</template>

<script>
import "leaflet";
import "leaflet/dist/leaflet.css";
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
  name: "OtherMapComponent",
  data: () => ({
    map: null,
    tileLayer: null,
  }),

  mounted() {
    var _this = this;
    _this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map("map", { pmIgnore: false }).setView([-25.441105, -49.276855], 13);
      // console.log("Right Side bar ", this.rightSidebar);
      this.tileLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
        {
          maxZoom: 20,
          attribution:
            '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      );
      this.tileLayer.addTo(this.map);
      //   this.setDrawingTools();
    },
    save() {
      alert("SAVE");
    },
  },
};
</script>

<style scoped>
#map {
  height: 100%;
}

.m-btn {
}
</style>
