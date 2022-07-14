<template>
  <v-container>
    <v-card>
      <div id="sidebar" class="leaflet-sidebar">
        <sidebar-menu-component
          @menu-button-clicked="menuButtonClicked"
        ></sidebar-menu-component>
      </div>
      <div id="map"></div>
      <map-modal :map-dialog="mapDialog"></map-modal>
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
import SidebarMenuComponent from "./SidebarMenuComponent.vue";
import MapModal from "./MapModal.vue";

const L = window["L"];

//Copy Geoman Draw Control

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
  components: { SidebarMenuComponent, MapModal },
  name: "MapComponent",
  // props:{},
  data: () => ({
    map: null,
    tileLayer: null,
    mapDialog: false,
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

      // this.creatFunction();

      // this.map.pm.setGlobalOptions({
      //   allowSelfIntersection: false,
      //   finishOn: "dblclick",
      // });
      //   this.map.pm.removeControls();
      // this.map.pm.toggleControls();
      // this.map.pm.controlsVisible();
      // this.layerControl = L.control.layers()
      // this.map.on("pm:drawstart", (e) => {
      //   this.logEvent(e);
      //   var layer = e.workingLayer;
      //   layer.on("pm:vertexadded", this.logEvent);
      //   layer.on("pm:snapdrag", this.logEvent);
      //   layer.on("pm:snap", this.logEvent);
      //   layer.on("pm:unsnap", this.logEvent);
      //   layer.on("pm:centerplaced", this.logEvent);
      // });
      // this.map.on("pm:drawend", this.logEvent);
      // this.map.on("pm:create", (e) => {
      //   this.logEvent(e);
      //   var layer = e.layer;
      //   this.map.pm.disableDraw();
      //   layer.pm.enable({
      //     allowSelfIntersection: false,
      //   });

      //   //Edit Event
      //   layer.on("pm:edit", this.logEvent);
      //   layer.on("pm:update", this.logEvent);
      //   layer.on("pm:enable", this.logEvent);
      //   layer.on("pm:disable", this.logEvent);
      //   layer.on("pm:vertexadded", this.logEvent);
      //   layer.on("pm:vertexremoved", this.logEvent);
      //   layer.on("pm:markerdragstart", this.logEvent);
      //   layer.on("pm:markerdrag", this.logEvent);
      //   layer.on("pm:markerdragend", this.logEvent);
      //   layer.on("pm:snap", this.logEvent);
      //   layer.on("pm:snapdrag", this.logEvent);
      //   layer.on("pm:unsnap", this.logEvent);
      //   layer.on("pm:intersect", this.logEvent);
      //   layer.on("pm:centerplaced", this.logEvent);

      //   //Drag Event
      //   layer.on("pm:dragstart", this.logEvent);
      //   layer.on("pm:drag", this.logEvent);
      //   layer.on("pm:dragend", this.logEvent);

      //   //Cut Event
      //   layer.on("pm:cut", this.logEvent);

      //   //Remove Event
      //   layer.on("pm:remove", this.logEvent);
      // });

      //Toggle mode events
      // this.map.on("pm:globaleditmodetoggled", this.logEvent);
      // this.map.on("pm:globaldragmodetoggled", this.logEvent);
      // this.map.on("pm:globalremovalmodetoggled", this.logEvent);
      // this.map.on("pm:globaldrawmodetoggled", this.logEvent);
      // this.map.on("pm:globalcutmodetoggled", this.logEvent);

      //Remove Event
      // this.map.on("pm:remove", this.logEvent);
      // this.map.on("layerremove", this.logEvent);

      //Cut event
      // this.map.on("pm:cut", this.logEvent);

      // this.map.on("pm:create", (e) => {
      //   var layer = e.layer;
      //   this.setPopup(layer);
      //   layer.on("pm:update", (e) => {
      //     this.setPopup(e.layer);
      //   });
      // });
      // this.customToolbarControl();
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
      });

      this.map.on("pm:drawstart", (e) => {
        console.log("LAYER ", e.shape);
      });

      this.map.on("pm:create", (e) => {
        var shape = e.shape;
        if (shape === "Circle") {
          e.layer.on("click", () => {
            this.mapDialogOnClick(e, shape);
          });
        }
        if (shape === "Polygon") {
          e.layer.on("click", () => {
            this.mapDialogOnClick(e, shape);
          });
        }
        if (shape === "Rectangle") {
          e.layer.on("click", () => {
            this.mapDialogOnClick(e, shape);
          });
        }
      });
    },

    mapDialogOnClick(e, type) {
      console.log("mapDialogOnClick ", e, type);
      if (type instanceof L.Circle) {
        this.map.setView(e.target.getLatLng());
      } else if (type instanceof L.Polygon || type instanceof L.Rectangle) {
        this.map.setView(e.target.getBounds().getCenter());
      }
      this.mapDialog = true;
    },
    //Copy geoman Graw Control

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

    menuButtonClicked() {
      this.map.on("pm:buttonclick", (e) => {
        var layer = e.layer;
        console.log("LAYER ", layer);
      });
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
