<template>
  <div class="sidebar collapsed">
    <div class="d-flex flex-column justify-end">
      <v-row no-gutters class="pt-5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-speed-dial
            direction="left"
            :open-on-hover="false"
            transition="slide-x-reverse-transition"
          >
            <template v-slot:activator>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-hover v-slot="{ hover }">
                    <v-btn small v-on="on" :color="hover ? 'accent' : 'white'">
                      <v-icon>mdi-home</v-icon>
                    </v-btn>
                  </v-hover>
                </template>
                <span>Tooltip</span>
              </v-tooltip>
            </template>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark small v-bind="attrs" v-on="on">
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </template>
              <span>Tooltip</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark small v-bind="attrs" v-on="on">
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </template>
              <span>Tooltip</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark small v-bind="attrs" v-on="on">
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </template>
              <span>Tooltip</span>
            </v-tooltip>
          </v-speed-dial>
        </v-col>
      </v-row>
      <!-- dashboard -->
      <v-row no-gutters class="pt-5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                @click.stop="toggleDashboard"
                color="white"
                max-height="40"
                min-height="0"
                min-width="0"
                max-width="40"
                depressed
              >
                <v-icon v-if="dashboardActive" size="20" color="primary">
                  mdi-chevron-right
                </v-icon>
                <v-icon v-else size="20" color="primary"> mdi-chevron-left </v-icon>
              </v-btn>
            </template>
            <span>Dashboard</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <!-- alertsGeneration section -->
      <v-row no-gutters class="pt-5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-speed-dial
            direction="left"
            :open-on-hover="true"
            transition="slide-x-reverse-transition"
          >
            <template v-slot:activator>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      max-height="40"
                      min-height="0"
                      min-width="0"
                      max-width="40"
                      :color="
                        sidebarController.alertsGeneration.polygonDesign
                          ? 'accent'
                          : hover
                          ? 'accent'
                          : 'white'
                      "
                      tile
                      depressed
                      style="border-top-right-radius: 4px; border-top-left-radius: 4px"
                      v-bind="attrs"
                      v-on="on"
                      @click="togglePolygonDesign"
                    >
                      <v-icon size="20" color="primary">mdi-pencil</v-icon>
                    </v-btn>
                  </v-hover>
                </template>
                <span>Desenho de poligono</span>
              </v-tooltip>
            </template>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mr-n3 ml-0"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  style="border-top-right-radius: 4px; border-bottom-right-radius: 4px"
                  depressed
                  tile
                  v-bind="attrs"
                  v-on="on"
                  :color="sidebarController.alertsGeneration.square ? 'accent' : 'white'"
                  @click.stop="toggleDrawOptions('square')"
                >
                  <v-icon size="20" color="primary">mdi-square</v-icon>
                </v-btn>
              </template>
              <span>OSM</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mr-0 ml-0"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  depressed
                  tile
                  v-bind="attrs"
                  v-on="on"
                  :color="sidebarController.alertsGeneration.circle ? 'accent' : 'white'"
                  @click.stop="toggleDrawOptions('circle')"
                >
                  <v-icon size="20" color="primary">mdi-circle</v-icon>
                </v-btn>
              </template>
              <span>Light</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mr-0 ml-0"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  depressed
                  tile
                  v-bind="attrs"
                  v-on="on"
                  :color="sidebarController.alertsGeneration.polygon ? 'accent' : 'white'"
                  @click.stop="toggleDrawOptions('polygon')"
                >
                  <v-icon size="20" color="primary">mdi-shape-polygon-plus</v-icon>
                </v-btn>
              </template>
              <span>Light</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mr-0 ml-0"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  style="border-top-left-radius: 4px; border-bottom-left-radius: 4px"
                  depressed
                  tile
                  v-bind="attrs"
                  v-on="on"
                  :color="
                    sidebarController.alertsGeneration.freeDraw ? 'accent' : 'white'
                  "
                  @click.stop="toggleDrawOptions('freeDraw')"
                >
                  <v-icon size="20" color="primary">mdi-dip-switch</v-icon>
                </v-btn>
              </template>
              <span>Dark</span>
            </v-tooltip>
          </v-speed-dial>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.alertsGeneration.selectCustomer
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  tile
                  depressed
                  @click.stop="toggleSelectCustomer"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-account-filter</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Selecionar cliente</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.alertsGeneration.arrowDrawing
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  tile
                  depressed
                  style="border-bottom-right-radius: 4px; border-bottom-left-radius: 4px"
                  @click.stop="toggleArrowDrawing"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary"
                    >mdi-arrow-top-left-bold-outline</v-icon
                  >
                </v-btn>
              </v-hover>
            </template>
            <span>Desenho de seta</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <!-- categoryEvent section -->
      <v-row no-gutters class="pt-5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.categoryEvent.event
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  @click.stop="toggleEvent"
                  tile
                  depressed
                  style="border-top-right-radius: 4px; border-top-left-radius: 4px"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-cloud</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Evento</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.categoryEvent.category
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  @click.stop="toggleCategory"
                  tile
                  depressed
                  style="border-bottom-right-radius: 4px; border-bottom-left-radius: 4px"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-home</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Categoria</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <!-- Layers section -->
      <v-row no-gutters class="pt-5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.layers.satellite
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  tile
                  depressed
                  style="border-top-right-radius: 4px; border-top-left-radius: 4px"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-home</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Satélite</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.layers.radar ? 'accent' : hover ? 'accent' : 'white'
                  "
                  tile
                  depressed
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-home</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Radar</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.layers.rays ? 'accent' : hover ? 'accent' : 'white'
                  "
                  tile
                  depressed
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-home</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Raios</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.layers.stationData
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  tile
                  depressed
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-home</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Dados de estação</span>
          </v-tooltip>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  :color="
                    sidebarController.layers.hotSpots
                      ? 'accent'
                      : hover
                      ? 'accent'
                      : 'white'
                  "
                  tile
                  depressed
                  style="border-bottom-right-radius: 4px; border-bottom-left-radius: 4px"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon size="20" color="primary">mdi-home</v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Focos de calor</span>
          </v-tooltip>
        </v-col>
      </v-row>

      <!-- BaseMap section -->
      <v-row no-gutters class="pt-5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-speed-dial
            direction="left"
            :open-on-hover="true"
            transition="slide-x-reverse-transition"
          >
            <template v-slot:activator>
              <v-btn
                max-height="40"
                min-height="0"
                min-width="0"
                max-width="40"
                color="primary"
                depressed
              >
                <v-icon size="20" color="white">mdi-layers</v-icon>
              </v-btn>
            </template>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ml-1 mr-n3"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  depressed
                  v-bind="attrs"
                  v-on="on"
                  :color="sidebarController.baseMap.osm ? 'accent' : 'primary'"
                  @click.stop="toggleMapLayer('osm')"
                >
                    <v-icon>mdi-google-maps</v-icon>
                  <!-- <v-img
                    src="@/assets/mini-map-osm.png"
                    max-height="32"
                    max-width="36"
                    style="border-radius: 2px"
                  ></v-img> -->
                </v-btn>
              </template>
              <span>OSM</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ml-1 mr-1"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  depressed
                  v-bind="attrs"
                  v-on="on"
                  :color="sidebarController.baseMap.light ? 'accent' : 'primary'"
                  @click.stop="toggleMapLayer('light')"
                >
                    <v-icon>mdi-map-search</v-icon>
                  <!-- <v-img
                    src="@/assets/mini-map-light.png"
                    max-height="32"
                    max-width="36"
                    style="border-radius: 2px"
                  ></v-img> -->
                </v-btn>
              </template>
              <span>Light</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ml-1 mr-1"
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  depressed
                  v-bind="attrs"
                  v-on="on"
                  :color="sidebarController.baseMap.dark ? 'accent' : 'primary'"
                  @click.stop="toggleMapLayer('dark')"
                >
                    <v-icon>mdi-map-search-outline</v-icon>
                  <!-- <v-img
                    src="@/assets/mini-map-dark.png"
                    max-height="32"
                    max-width="36"
                    style="border-radius: 2px"
                  ></v-img> -->
                </v-btn>
              </template>
              <span>Dark</span>
            </v-tooltip>
          </v-speed-dial>
        </v-col>
      </v-row>

      <!-- ruler scale section -->
      <v-row no-gutters class="pt-1">
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-hover v-slot="{ hover }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  :color="
                    sidebarController.ruler.scale ? 'accent' : hover ? 'accent' : 'white'
                  "
                  max-height="40"
                  min-height="0"
                  min-width="0"
                  max-width="40"
                  depressed
                  @click.stop="toggleRulerScale"
                >
                  <v-icon size="20" color="primary"> mdi-home </v-icon>
                </v-btn>
              </v-hover>
            </template>
            <span>Régua</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarMenuComponent",
  data: () => ({
    fling: false,
    tabs: null,
    dashboardActive: false,
    sidebarController: {
      alertsGeneration: {
        polygonDesign: false,
        square: false,
        circle: false,
        polygon: false,
        freeDraw: false,
        selectCustomer: false,
        arrowDrawing: false,
      },
      categoryEvent: {
        event: false,
        category: false,
      },
      layers: {
        satellite: false,
        radar: false,
        rays: false,
        stationData: false,
        hotSpots: false,
      },
      baseMap: {
        osm: true,
        light: false,
        dark: false,
      },
      ruler: {
        scale: false,
      },
    },
  }),
  methods: {
    toggleDashboard() {
      this.dashboardActive = !this.dashboardActive;
      console.log("DASHBOARD ", this.dashboardActive);
    },
    toggleRulerScale() {
      this.sidebarController.ruler.scale = !this.sidebarController.ruler.scale;
    },
    toggleDrawOptions(option) {
      switch (option) {
        case "square":
          this.sidebarController.alertsGeneration.polygonDesign = true;
          this.sidebarController.alertsGeneration.square = true;
          this.sidebarController.alertsGeneration.circle = false;
          this.sidebarController.alertsGeneration.polygon = false;
          this.sidebarController.alertsGeneration.freeDraw = false;
          break;
        case "circle":
          this.sidebarController.alertsGeneration.polygonDesign = true;
          this.sidebarController.alertsGeneration.square = false;
          this.sidebarController.alertsGeneration.circle = true;
          this.sidebarController.alertsGeneration.polygon = false;
          this.sidebarController.alertsGeneration.freeDraw = false;
          break;
        case "polygon":
          this.sidebarController.alertsGeneration.polygonDesign = true;
          this.sidebarController.alertsGeneration.square = false;
          this.sidebarController.alertsGeneration.circle = false;
          this.sidebarController.alertsGeneration.polygon = true;
          this.sidebarController.alertsGeneration.freeDraw = false;
          break;

        case "freeDraw":
          this.sidebarController.alertsGeneration.polygonDesign = true;
          this.sidebarController.alertsGeneration.square = false;
          this.sidebarController.alertsGeneration.circle = false;
          this.sidebarController.alertsGeneration.polygon = false;
          this.sidebarController.alertsGeneration.freeDraw = !this.sidebarController
            .alertsGeneration.freeDraw;
          break;
        default:
          this.sidebarController.alertsGeneration.polygonDesign = false;
          break;
      }
    },
    toggleMapLayer(mapType) {
      switch (mapType) {
        case "osm":
          this.sidebarController.baseMap.osm = true;
          this.sidebarController.baseMap.light = false;
          this.sidebarController.baseMap.dark = false;
          break;
        case "light":
          this.sidebarController.baseMap.osm = false;
          this.sidebarController.baseMap.light = true;
          this.sidebarController.baseMap.dark = false;
          break;
        case "dark":
          this.sidebarController.baseMap.osm = false;
          this.sidebarController.baseMap.light = false;
          this.sidebarController.baseMap.dark = true;
          break;
        default:
          break;
      }
    },
    toggleEvent() {
      this.sidebarController.categoryEvent.event = !this.sidebarController.categoryEvent
        .event;
      if (this.sidebarController.categoryEvent.category) {
        this.sidebarController.categoryEvent.category = false;
      }
    },
    togglePolygonDesign() {
      if (this.sidebarController.alertsGeneration.selectCustomer) {
        this.sidebarController.alertsGeneration.selectCustomer = false;
      }
      if (this.sidebarController.alertsGeneration.arrowDrawing) {
        this.sidebarController.alertsGeneration.arrowDrawing = false;
      }
    },
    toggleSelectCustomer() {
      this.sidebarController.alertsGeneration.selectCustomer = !this.sidebarController
        .alertsGeneration.selectCustomer;
      if (this.sidebarController.alertsGeneration.polygonDesign) {
        this.sidebarController.alertsGeneration.polygonDesign = false;
        this.sidebarController.alertsGeneration.square = false;
        this.sidebarController.alertsGeneration.circle = false;
        this.sidebarController.alertsGeneration.polygon = false;
        this.sidebarController.alertsGeneration.freeDraw = false;
      }
      if (this.sidebarController.alertsGeneration.arrowDrawing) {
        this.sidebarController.alertsGeneration.arrowDrawing = false;
      }
    },
    toggleArrowDrawing() {
      this.sidebarController.alertsGeneration.arrowDrawing = !this.sidebarController
        .alertsGeneration.arrowDrawing;
      if (this.sidebarController.alertsGeneration.selectCustomer) {
        this.sidebarController.alertsGeneration.selectCustomer = false;
      }
      if (this.sidebarController.alertsGeneration.polygonDesign) {
        this.sidebarController.alertsGeneration.polygonDesign = false;
        this.sidebarController.alertsGeneration.square = false;
        this.sidebarController.alertsGeneration.circle = false;
        this.sidebarController.alertsGeneration.polygon = false;
        this.sidebarController.alertsGeneration.freeDraw = false;
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: relative;
  background-color: transparent;
  color: black;
}
.sidebar.collapsed {
  width: 205px;
}
</style>
