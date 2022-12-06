<template>
  <div id="map-wrapper">
    <div ref="mapElementMonitoringRef" class="map">
      <button-action-component
        :showButton="showButton"
      ></button-action-component>
    </div>
    <map-menu :showMenu="menu" :positionX="x" :positionY="y"></map-menu>
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
// import ModalMapComponent from "./ModalMapComponent.vue";
import ButtonActionComponent from "./ButtonActionComponent.vue";
import MapMenu from "./MapMenu.vue";

const L = window["L"];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
  components: { ButtonActionComponent, MapMenu },
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
    // mapDialog: false,
    // mapMenu: false,
    menu: false,
    x: 0,
    y: 0,
    layerControl: null,
    showButton: false,
    L41: undefined,
    L42: undefined,
    L43: undefined,
    L44: undefined,
    L45: undefined,
    L46: undefined,
    L4: undefined,
    // editableLayers: null,
  }),
  mounted() {
    var _this = this;
    this.initMap();
    this.map.on("pm:create", (e) => {
      // console.log('PM CREATE ', e);
      const layer = e.layer.pm;
      console.log("LAYER ", layer);
      var shape = e.shape;
      if (shape === "Circle") {
        e.layer.on("click", function (e) {
          _this.showMenuMap(e);
          console.log("Circle");
        });
      } else if (shape === "Polygon") {
        e.layer.on("click", function (e) {
          _this.showMenuMap(e);
          console.log("Polygon");
        });
      } else if (shape === "Rectangle") {
        e.layer.on("click", function (e) {
          _this.showMenuMap(e);
          console.log("Rectangle");
        });
      }
    });
    this.showMarkers();
    this.setCircles();
    // this.map.on("pm:drawstart", (e) => {
    //   console.log("Draw Start ", e);
    //   console.log("E ", e);
    //   this.showButton = !this.showButton;
    // });

    // this.map.on("pm:drawend", (e) => {
    //   console.log("Draw End ", e);
    //   console.log("EVENT ", e);
    //   this.showButton = false;
    // });

    // this.map.on('layerremove', (e) => {
    //   console.log('Layer remove ', e);
    // })

    // this.map.on("pm:globalremovalmodetoggled", (e) => {
    //   console.log('Remove iniciado');
    //   console.log(e);
    // });

    // this.map.on("pm:remove", (e) => {
    //   console.log("REMOVE terminado");
    //   console.log("PM REMOVE ", e);
    // });

    // this.map.on('pm:actionclick', (e) => {
    //   console.log('ACtion Click ', e);
    // })

    // this.map.on("pm:edit", (e) => {
    //   console.log("Edit Event", e);
    // });
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.mapElementMonitoringRef, {
        minZoom: 20,
        maxZoom: 2,
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
    showMarkers() {
      this.L41 = L.marker([-25.442342022458362, -49.23874344435279]).bindPopup(
        "Jardim Botânico"
      );
      this.L42 = L.marker([
        -25.435404976601276, -49.236297269873994,
      ]).bindPopup("MC Donalds");
      this.L43 = L.marker([
        -25.445984780397108, -49.218830725788614,
      ]).bindPopup("Academia Trabalhe Duro");
      this.L44 = L.marker([-25.47334069550606, -49.235996862043464]).bindPopup("Farmácias Nissei");
      this.L45 = L.marker([-25.493795444436614, -49.22496761874205]).bindPopup("Ginásio de Esportes Apollo");
      // this.L46 = L.marker();

      this.L4 = L.layerGroup([this.L41, this.L42, this.L43]);

      this.L4.addTo(this.map);
    },
    setCircles() {
      const groupLayers = this.L4.getLayers();
      groupLayers.forEach(obj => {
        if (obj instanceof L.Marker) {
          L.circle(obj.getLatLng(), 1609.34, {
            color: 'red',
            fillColor: 'blue'
          }).addTo(this.map);
        }
      });
      // console.log('Group Layers ', groupLayers);
    },
    showMenuMap(e) {
      this.menu = false;
      var container = document.getElementById("map-wrapper");
      var bounds = container.getBoundingClientRect();
      var x = e.clientX - bounds.left;
      var y = e.clientY - bounds.top;
      // if(x < 0 || y < 0 || x > 300 || y > 300) {
      // }
      this.x = x;
      this.y = y;
      this.$nextTick(() => (this.menu = true));
    },

    // mapMenuOnClick(e, shape) {
    //   if (shape === "Circle") {
    //     this.map.setView(e.target.getLatLng());
    //   } else if (shape === "Polygon") {
    //     this.map.setView(e.target.getBounds().getCenter());
    //   } else if (shape === "Rectangle") {
    //     this.map.setView(e.target.getBounds().getCenter());
    //   }
    //   this.mapMenu = !this.mapMenu;
    // },

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
