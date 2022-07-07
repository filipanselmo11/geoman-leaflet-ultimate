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
                    <v-btn
                      @click="menuButtonClicked"
                      small
                      v-on="on"
                      :color="hover ? 'accent' : 'white'"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </v-hover>
                </template>
              </v-tooltip>
            </template>
          </v-speed-dial>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "MonitoringMenu",
  props: ["alert", "imageAlertScreenshot"],
  data: () => ({
    dataAlert: false,
    image: null,
    eventtypes:[],
  }),
  watch:{
    alert(val){
      this.dataAlert = val;
    },
    imageAlertScreenshot(val){
      this.image = val;
    }
  },
  // props: ["sidebar"],
  //   props:{
  //     monitoringDialog: {
  //         type: Boolean,
  //         default: false,
  //     },
  //   },
  //   data: () => ({
  //     dialog: false,
  //     alertMonitoringDialog: false,
  //   }),
  //   watch:{
  //     monitoringDialog(val){
  //         this.dialog = val;
  //     }
  //   },
  // watch: {
  //   button(val) {
  //     if (val) {
  //       console.log(val);
  //     }
  //   },
  // },
  methods: {
    //     menuButtonClicked(e){
    //         console.log('monitoringDialogOnClick ', e);
    //         this.alertMonitoringDialog = true;
    //     }
    menuButtonClicked(e) {
      this.$emit("menu-button-clicked", e);
      // console.log("Console log do componente filho ", e);
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
