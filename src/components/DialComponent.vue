<template>
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
                sidebarController.layers.radar
                  ? 'accent'
                  : hover
                  ? 'accent'
                  : 'white'
              "
              tile
              depressed
              v-bind="attrs"
              v-on="on"
              @click="toggleRadar"
            >
              <v-icon size="20" color="primary"> mdi-radar </v-icon>
            </v-btn>
          </v-hover>
        </template>
        <span>Radar</span>
      </v-tooltip>
    </template>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{ hover }">
          <v-btn
            class="mr-n3 ml-0"
            max-height="40"
            min-height="0"
            min-width="0"
            max-width="120"
            style="border-top-right-radius: 4px; border-bottom-left-radius: 4px"
            depressed
            tile
            v-bind="attrs"
            v-on="on"
            :color="
              sidebarController.layers.mg
                ? 'accent'
                : hover
                ? 'accent'
                : 'while'
            "
            @click.stop="toggleRadarOptions('mg')"
          >
            <span style="font-size: 14px">MSC 1.0</span>
          </v-btn>
        </v-hover>
      </template>
      <span>Mosaico Geral 1.0</span>
    </v-tooltip>
    <div
      style="border-right: 1px solid var(--v-divider-base); height: 36px"
    ></div>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{ hover }">
          <v-btn
            class="mr-0 ml-0"
            max-height="40"
            min-height="0"
            min-width="0"
            max-width="65"
            depressed
            tile
            v-bind="attrs"
            v-on="on"
            :color="
              sidebarController.layers.cas
                ? 'accent'
                : hover
                ? 'accent'
                : 'white'
            "
            @click.stop="toggleRadarOptions('cas')"
          >
            <span style="font-size: 14px">Cascavel</span>
          </v-btn>
        </v-hover>
      </template>
      <span>Cascavel (480 km)</span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
export default {
  name: "DialComponent",
  data: () => ({
    sidebarController: {
      layers: {
        radar: false,
        mg: false,
        cas: false,
      },
    },
  }),
  methods: {
    toggleRadar() {
      this.sidebarController.layers.radar = false;
      this.sidebarController.layers.mg = false;
      this.sidebarController.layers.cas = false;
    },
    toggleRadarOptions(option) {
      switch (option) {
        case "mg":
          this.sidebarController.layers.mg = true;
          this.sidebarController.layers.cas = false;
          break;
        case "cas":
          this.sidebarController.layers.mg = false;
          this.sidebarController.layers.cas = true;
          break;
      }
    },
  },
};
</script>

<style>
.sidebar {
  position: relative;
  background-color: transparent;
  color: black;
}
.sidebar.notcollapsed {
  width: 375px;
}
.sidebar.collapsed {
  width: 40px;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #a8a8a8;
}
::-webkit-scrollbar-thumb:hover {
  background: #c3c3c3;
}
.v-list.v-select-list.v-sheet.theme--light.theme--light {
  background: var(--v-primary-base) !important;
}
.v-list-item__title {
  font-size: 12px;
  color: white !important;
}
.v-icon.notranslate.mdi.mdi-checkbox-blank-outline.theme--light {
  color: white !important;
  font-size: 16px;
}
.v-icon.notranslate.mdi.mdi-checkbox-marked.theme--light.white--text {
  font-size: 16px !important;
}
/*.v-application--is-ltr.v-list-item__action:first-child,.v-application--is-ltr.v-list-item__icon:first-child.theme--light{
  margin-right: 0px !important;
}*/
</style>