<template>
    <div id="map-wrapper">
      <div ref="mapElementMonitoringRef" class="map"></div>
      <modal-map-component
        :mapMenu="mapMenu"
        @editOnClick="editarOnClick"
        @eventOnClick="atribuirEventoOnClick"
        @categoryOnClick="atribuirCategoriaOnClick"
        @removeOnClick="removerDesenhoOnClick"
      ></modal-map-component>
  </div>
</template>

<script>
import "leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-sidebar-v2";
// import "leaflet-sidebar-v2/css/leaflet-sidebar.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import ModalMapComponent from "./ModalMapComponent.vue";

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
  components: { ModalMapComponent },
  name: "MapComponent",
  // props:{},
  data: () => ({
    map: null,
    tileLayer: null,
    mapDialog: false,
    mapMenu: false,
    layerControl: null,
    // editableLayers: null,
  }),
  mounted() {
    var _this = this;
    this.initMap();
    //Draw Create
    this.map.on("pm:create", function (e) {
      // var coordinates = [];
      var shape = e.shape;
      // console.log("LAYER ", layer);
      if (shape === "Circle") {
        // coordinates.push(this.map.getLatLng());
        e.layer.on("click", function (e) {
          _this.mapMenuOnClick(e,shape);
        });
      } else if (shape === "Polygon") {
        // coordinates.push(this.map.getLatLng());
        e.layer.on("click", function (e) {
          _this.mapMenuOnClick(e,shape);
        });
      } else if (shape === "Rectangle") {
        // coordinates.push(this.map.getLatLng());
        e.layer.on("click", function (e) {
          _this.mapMenuOnClick(e,shape);
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
      const editElement = document.getElementsByClassName("leaflet-pm-icon-edit");
      editElement[0].click(() => {
      });
    },
    removeOnClick() {
      const removeElement = document.getElementsByClassName("leaflet-pm-icon-delete");
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
</style>
