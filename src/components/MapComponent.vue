<template>
  <v-container>
    <select :id="idSelector"></select>
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

//Store for all markers
var allMarkers = L.layerGroup();

var buttonBar = L.control({
  position: "horizontalcenterbottom",
});




export default {
  name: "MapComponent",
  data: () => ({
    map: null,
    idSelector: "mySelector",
  }),
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map("map", {
        center: [53.905, 27.562],
        zoom: 11,
        maxZoom: 18,
        zoomControl: false,
      });
      this.map.on("layeradd", (e) => {
        if (!e.layer.options) {
          return;
        }
        if (
          e.layer.options.id != "markerLayer1" &&
          e.layer.options.id != "markerLayer2" &&
          e.layer.options.id != "markerLayer3"
        ) {
          return;
        }

        var markers = e.layer.getLayers();
        console.clear();

        //Get the dropdown
        var mySelector = document.getElementById(this.idSelector);

        markers
          .sort((a, b) => {
            var aId = parseInt(a.feature.properties.id, 10);
            var bId = parseInt(b.feature.properties.id, 10);
            return aId < bId ? -1 : aId > bId ? 1 : 0;
          })
          .forEach((marker) => {
            mySelector.append(
              "<option value='" +
                L.stamp(marker) +
                "'>" +
                marker.feature.properties.id +
                ". " +
                marker.feature.properties.name +
                "</option>"
            );
          });
      });
      this.map.on("layerremove", (e) => {
        if (!e.layer.options) {
          return;
        }

        if (
          e.layer.options.id != "markerLayer1" &&
          e.layer.options.id != "markerLayer2" &&
          e.layer.options.id != "markerLayer3"
        ) {
          return;
        }

        var markers = e.layer.getLayers();
        var mySelector = document.getElementById(this.idSelector);
        for (var i = 0; i < markers.length; i++) {
          mySelector.find("option[value='" + L.stamp(markers[i]) + "']").remove();
        }
      });
      this.mySelector.change((e) => {
        var selected = allMarkers.getLayer(this.val());
        if (markerLayer1.hasLayer(selected)) {
          markerLayer1.zoomToShowLayer(selected, () => {
            selected.openPopup();
          });
        }
        if (markerLayer2.hasLayer(selected)) {
          markerLayer2.zoomToShowLayer(selected, () => {
            selected.openPup();
          });
        }
        if (markerLayer3.hasLayer(selected)) {
          markerLayer3.zoomToShowLayer(selected, () => {
            selected.openPopup();
          });
        }
        console.log(e);
      });

      var markerLayer1 = L.markerClusterGroup({
        id: "markerLayer1",
      });

      var markerLayer2 = L.markerClusterGroup({
        id: "markerLayer2",
      });
      var markerLayer3 = L.markerClusterGroup({
        id: "markerLayer3",
      });

      var markers1 = L.geoJson(firstGroup, {
        onEachFeature(feature, layer) {
          allMarkers.addLayer(layer);
          layer.bindPopup("marker 1:" + feature.properties.name);
        },
      });

      var markers2 = L.geoJson(secondGroup, {
        onEachFeature(feature, layer) {
          allMarkers.addLayer(layer);
          layer.bindPopup("marker 2:" + feature.properties.name);
        },
      });

      var markers3 = L.geoJson(thirdGroup, {
        onEachFeature(feature, layer) {
          allMarkers.addLayer(layer);
          layer.bindPopup("marker 3:" + feature.properties.name);
        },
      });

      markerLayer1.addLayer(markers1);
      markerLayer2.addLayer(markers2);
      markerLayer3.addLayer(markers3);

      //Base Map1
      var basemap1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
      //Base Map2
      var basemap2 = L.tileLayer(
        "http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png"
      );
      //Base Map3
      var basemap3 = L.tileLayer(
        "http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
      );

      this.map.addLayer(markerLayer1);
      this.map.addLayer(basemap1);

      var baseLayers = {
        "Mapa 1": basemap1,
        "Mapa 2": basemap2,
        "Mapa 3": basemap3,
      };

      var overlays = {
        "Marker 1": markerLayer1,
        "Maker 2": markerLayer2,
        "Marker 3": markerLayer3,
      };
      this.addControlPlaceholders(this.map);
    },
    addControlPlaceholders(map) {
      var corners = map._controlCorners;
      var l = "leaflet";
      var container = map._controlContainer;

      const createCorner = (vSide, hSide) => {
        var className = l + vSide + " " + l + hSide;
        corners[vSide + hSide] = L.DomUtil.create("div", className, container);
      };

      createCorner("verticalcenter", "left");
      createCorner("verticalcenter", "right");
      createCorner("horizontalcenter", "top");
      createCorner("horizontalcenter", "bottom");
    },

    buttonBarFunction(map){
      buttonBar.onAdd = (map) {
  var div = L.DomUtil.create('div', 'myButtonBar');
  L.DomEvent.disableClickPropagation(div);
  div.innerHTML = '<div class="switch-field noselect"><div class="switch-title">MAPS</div>'
    + '<input type="radio" id="switch_map1" name="map_switch" checked/>'
    + '<label for="switch_map1">Map 1</label>'
    + '<input type="radio" id="switch_map2" name="map_switch" />'
    + '<label for="switch_map2">Map 2</label>'
    + '<input type="radio" id="switch_map3" name="map_switch" />'
    + '<label for="switch_map3">Map 3</label></div>'
    + '<div class="switch-field noselect">'
    + '<input type="radio" id="switch_marker1" name="marker_switch" checked/>'
    + '<label for="switch_marker1">Marker 1</label>'
    + '<input type="radio" id="switch_marker2" name="marker_switch" />'
    + '<label for="switch_marker2">Marker 2</label>'
    + '<input type="radio" id="switch_marker3" name="marker_switch" />'
    + '<label for="switch_marker3">Marker 3</label>'
    + '<div class="switch-title">MARKERS</div></div>';
  return div;
};
    }
  },
};
</script>

<style scoped>
html,
body,
#map {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

#mySelector {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;
}

.myButtonBar {
  background: white;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-align: center;
  padding: 0px 10px;
  position: relative;
}

.leaflet-verticalcenter {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-top: 10px;
}

.leaflet-verticalcenter .leaflet-control {
  margin-bottom: 10px;
}

.leaflet-horizontalcenter {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 10px;
}

.leaflet-horizontalcenter .leaflet-control {
  margin-bottom: 10px;
}

.switch-field {
  font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
  padding: 5px;
  overflow: hidden;
}

.switch-title {
  font-size: 16px;
}

.switch-title:hover {
  cursor: default;
}

.switch-field input {
  display: none;
}

.switch-field label {
  float: left;
}

.switch-field label {
  display: inline-block;
  width: 65px;
  background-color: #f4f4f4;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  text-shadow: none;
  padding: 2px 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
  cursor: pointer;
}

.switch-field input:checked + label {
  background-color: #444;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: rgba(255, 255, 255, 1);
}

.switch-field label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.switch-field label:last-of-type {
  border-radius: 0 4px 4px 0;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  not supported by any browser */
}
</style>
