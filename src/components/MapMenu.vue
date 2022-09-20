<template>
  <v-menu
    :close-on-click="false"
    v-model="menu"
    absolute
    :position-x="x"
    :position-y="y"
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Madara Uchiha </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Silver Rayligh </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Maki Zenin </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "MapMenu",
  props: ["showMenu", "positionX", "positionY"],
  //   props: {
  //     showMenu: {
  //       type: Boolean,
  //     },
  //     positionX: {
  //       type: Number,
  //     },
  //     positionY: {
  //       type: Number,
  //     },
  //   },
  data: () => ({
    // attachF: undefined,
    menu: false,
    x: 0,
    y: 0,
  }),
  watch: {
    // attachContainer(val) {
    //   this.attachF = val;
    // },
    showMenu(val) {
      this.menu = val;
    },
    positionX(val) {
      this.x = val;
    },
    positionY(val) {
      this.y = val;
    },
  },
};
</script>

<style>
</style>