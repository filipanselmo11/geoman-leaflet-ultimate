<template>
  <div id="map-wrapper">
    <div ref="mapElementMonitoringRef" class="map">
      <button-action-component
        :showButton="showButton"
      ></button-action-component>
    </div>
    <modal-map-component
      :mapMenu="mapMenu"
      @editOnClick="editarOnClick"
      @eventOnClick="atribuirEventoOnClick"
      @categoryOnClick="atribuirCategoriaOnClick"
      @removeOnClick="removerDesenhoOnClick"
    ></modal-map-component>
    <!-- <div id="sidebar" class="leaflet-sidebar">
      <button-action-component :showButton="showButton"></button-action-component>
    </div> -->
  </div>
</template>

<script>
import "leaflet";
import "leaflet-sidebar-v2";
import "leaflet/dist/leaflet.css";
// import "leaflet-sidebar-v2";
// import "leaflet-sidebar-v2/css/leaflet-sidebar.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import ModalMapComponent from "./ModalMapComponent.vue";
import ButtonActionComponent from "./ButtonActionComponent.vue";

const L = window["L"];

// const _actions = [
//   'cancel',
//   {
//     text: 'finish',
//     onClick: () => {
//       this.map.on('pm:create', (e) => {
//         console.log('EVENT ', e);
//       })
//     }
//   }
// ];

export default {
  components: { ModalMapComponent, ButtonActionComponent },
  name: "MapComponent",
  // props:{},
  data: () => ({
    leftSidebar: L.control.sidebar({
      autopan: false,
      closeButton: true,
      container: "sidebar",
      position: "left",
    }),
    map: null,
    tileLayer: null,
    mapDialog: false,
    mapMenu: false,
    layerControl: null,
    showButton: false,
    // editableLayers: null,
  }),
  mounted() {
    // var _this = this;
    this.initMap();
    //Draw Create
    this.map.on("pm:create", (e) => {
      e.layer.on("pm:edit", ({ layer }) => {
        this.showButton = !this.showButton;
        console.log("edit Event ", layer);
      });
      this.showButton = false;
    });
    // this.map.on('pm:create', ({ layer }) => {
    //   layer.on('pm:drawstart', e => {
    //     console.log('Draw Start event ', e);
    //   });
    //   layer.on('pm:edit', e => {
    //     console.log('Edit Event ', e);
    //   });
    // });
    // this.map.on("pm:drawstart", (e) => {
    //   console.log("Draw Start");
    //   console.log("E ", e);
    //   this.showButton = !this.showButton;
    // });

    // this.map.on("pm:drawend", (e) => {
    //   console.log("Draw End");
    //   console.log("EVENT ", e);
    //   this.showButton = false;
    // });

    // this.map.on("pm:edit", (e) => {
    //   console.log("Edit Event", e);
    // });
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.mapElementMonitoringRef, {
        pmIgnore: false,
      }).setView([-25.441105, -49.276855], 13);
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
      this.leftSidebar.addTo(this.map);
      this.setDrawingTools();
    },

    setDrawingTools() {
      this.map.pm.addControls({
        position: "bottomright",
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

      this.map.pm.Toolbar.copyDrawControl("Rectangle", {
        name: "RectangleCopy",
        block: "custom",
        title: "Display text on hover button",
      });
      // this.map.pm.Draw.RectangleCopy.setPathOptions({color: 'green'});
    },

    mapMenuOnClick(e, shape) {
      if (shape === "Circle") {
        this.map.setView(e.target.getLatLng());
      } else if (shape === "Polygon") {
        this.map.setView(e.target.getBounds().getCenter());
      } else if (shape === "Rectangle") {
        this.map.setView(e.target.getBounds().getCenter());
      }
      this.mapMenu = !this.mapMenu;
    },

    editarOnClick() {},
    atribuirEventoOnClick() {},

    atribuirCategoriaOnClick() {},

    removerDesenhoOnClick() {},

    // mapDialogOnClick(e, type) {
    //   var shape = e.shape;
    //   console.log("mapDialogOnClick ", e, type);
    //   if (shape === "Circle") {
    //     this.mapDialog = true;
    //     // this.map.setView(e.target.getLatLng());
    //   } else if (shape === "Polygon") {
    //     this.mapDialog = true;
    //     // this.map.setView(e.target.getBounds().getCenter());
    //   } else if (shape === "Rectangle") {
    //     this.mapDialog = true;
    //     // this.map.setView(e.target.getBounds().getCenter());
    //   }
    //   // if (shape === "Circle") {
    //   //   this.map.setView(e.target.getLatLng());
    //   //   console.log("LAT LON ", e.target.getLatLng());
    //   // } else if (shape === "Polygon" || shape === "Rectangle") {
    //   //   this.map.setView(e.target.getBounds().getCenter());
    //   //   console.log("BOUNDS CENTER ", e.target.getBounds().getCenter());
    //   // }
    //   // this.mapDialog = true;
    // },

    editOnClick() {
      const editElement = document.getElementsByClassName(
        "leaflet-pm-icon-edit"
      );
      editElement[0].click(() => {});
    },
    removeOnClick() {
      const removeElement = document.getElementsByClassName(
        "leaflet-pm-icon-delete"
      );
      removeElement[0].click(() => {});
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
.leaflet-sidebar {
  position: relative;
  top: 91px;
  right: 10px;
  max-width: 800px;
  height: 67vh;
  z-index: 2000;
  background-color: transparent;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid red;
}
</style>
