<template>
  <div id="map-wrapper">
    <div ref="mapElementMonitoringRef" class="map" />
    <map-modal
      :map-dialog="mapDialog"
      @mapDialogClose="eventHandlerMapDialogClose"
    ></map-modal>
  </div>
</template>

<script>
import "leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-sidebar-v2";
// import "leaflet-sidebar-v2/css/leaflet-sidebar.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import MapModal from "./MapModal.vue";

const L = window["L"];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  components: { MapModal },
  name: "MapComponent",
  // props:{},
  data: () => ({
    map: null,
    tileLayer: null,
    mapDialog: false,
    layerControl: null,
    // editableLayers: null,
  }),
  mounted() {
    this.initMap();
    this.map.on("pm:create", (e) => {
      var shape = e.shape;
      if (shape === "Circle") {
        let coordinates = [];
        coordinates[0] = e.layer.getLatLng().lat.toFixed(4);
        coordinates[1] = e.layer.getLatLng().lng.toFixed(4);
        let feature = {
          type: "Feature",
          geometry: { type: "Point", coordinates: coordinates },
          properties: {
            subType: "Circle",
            radius: e.layer.getRadius().toFixed(4),
          },
        };
        this.replyFeature(feature);
        e.layer.on("click", (x) => {
          this.mapDialogOnClick(x, shape);
        });
      } else if (shape === "Polygon") {
        let coordinates = [];
        const latlngs = e.layer.getLatLngs()[0];
        for (let r = 0; r < latlngs.length; r++) {
          coordinates.push([latlngs[r].lat.toFixed(4), latlngs[r].lng.toFixed(4)]);
        }
        this.replyGeometry({ type: "Polygon", coordinates: [coordinates] });
        e.layer.on("click", (x) => {
          this.mapDialogOnClick(x, shape);
        });
      } else if (shape === "Rectangle") {
        e.layer.on("click", (x) => {
          this.mapDialogOnClick(x, shape);
        });
      }
    });
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.mapElementMonitoringRef, { pmIgnore: false }).setView(
        [-25.441105, -49.276855],
        13
      );
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

      this.setDrawingTools();
    },

    setDrawingTools() {
      this.map.pm.addControls({
        position: "topleft",
        drawControls: true,
        editControls: true,
        optionsControls: true,
        customControls: true,
        oneBlock: false,
        removalMode: true,
        dragMode: false,
        cutPolygon: false,
        rotateMode: false,
        drawText: false,
        drawCircleMarker: false,
        drawMarker: false,
        drawPolyline: false,
      });

      this.map.pm.setGlobalOptions({
        allowSelfIntersection: false,
        finishOn: "dblclick",
      });
    },

    mapDialogOnClick(e, type) {
      console.log("mapDialogOnClick ", e, type);
      if (type instanceof L.Circle) {
        this.map.setView(e.target.getLatLng());
        console.log("LAT LON ", e.target.getLatLng());
      } else if (type instanceof L.Polygon || type instanceof L.Rectangle) {
        this.map.setView(e.target.getBounds().getCenter());
        console.log("BOUNDS CENTER ", e.target.getBounds().getCenter());
      }
      this.mapDialog = true;
    },
    eventHandlerMapDialogClose(reply) {
      this.mapDialog = !reply.dialogClosed;
    },

    replyGeometry(geometry) {
      this.$emit("listenerMap", geometry);
    },

    replyFeature(feature) {
      this.$emit("listernerFeatureMap", feature);
    },

    logEvent(e) {
      console.log("Log Event ", e);
    },
    makePopupContent(feature) {
      return `${feature.geometry.coordinates}`;
    },
    setPopup(layer) {
      var feature = layer.toGeoJSON();
      var coords = this.makePopupContent(feature);
      layer.bindPopup(coords);
    },
  },
};
</script>

<style scoped>
.map {
  height: 100%;
  width: 100%;
  z-index: 1;
}

#map-wrapper {
  height: calc(100vh - 90px);
}
</style>
