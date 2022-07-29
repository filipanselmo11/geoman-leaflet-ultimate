<template>
  <div class="text-center">
    <!-- 
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x</v-menu>
   -->
    <v-menu v-model="menu" offset-x>
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Menu as Popover</v-btn>
      </template> -->
      <v-card dark>
        <v-list>
          <v-list-item>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <!-- <v-icon @click="menu = false">mdi-close-box</v-icon> -->
              <v-btn @click="menu = false" rounded>
                <v-icon>mdi-close-box</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-list-item @click="editOnClick">
            <v-list-item-title>Editar Desenho</v-list-item-title>
          </v-list-item>
          <v-list-item @click="eventOnClick">
            <v-list-item-title>Atribuir Evento</v-list-item-title>
          </v-list-item>

          <v-list-item @click="categoryOnClick">
            <v-list-item-title>Atribuir Categoria</v-list-item-title>
          </v-list-item>
          <v-list-item @click="removeOnClick">
            <v-list-item-title>Remover Desenho</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "ModalMapComponent",
  props: {
    mapMenu: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: false,
    items: [
      {
        title: "Editar Desenho",
      },
      {
        title: "Atribuir Evento",
      },
      {
        title: "Atribuir Categoria",
      },
      {
        title: "Remover Desenho",
      },
    ],
  }),

  watch: {
    mapMenu(val) {
      setTimeout(() => {
        if (val) {
          this.menu = val;
          console.log("Watch VALUE ", this.menu);
        }
      }, 100);
      // if (val) {
      //   this.menu = val;
      //   console.log('WATCH VALUE ', this.menu);
      // }
    },
  },

  methods: {
    editOnClick(e) {
      this.$emit("editOnClick", e);
      console.log("Edit Clicked");
      this.menu = false;
    },
    eventOnClick(e) {
      this.$emit("eventOnClick", e);
      console.log("Atribuir Event Clicked");
      this.menu = false;
    },
    categoryOnClick(e) {
      this.$emit("categoryOnClick", e);
      console.log("Atribuir Categoria Clicked");
      this.menu = false;
    },
    removeOnClick(e) {
      this.$emit("removeOnClick", e);
      console.log("Remove Clicked");
      this.menu = false;
    },
  },
};
</script>

<style scoped>
.v-list.v-sheet.theme--dark {
  background: #2f4966 !important;
}

/*.v-icon.notranslate.v-icon--link.mdi.mdi-close-box.theme--dark::before {
  position: absolute !important;
  width: 22px !important;
  height: 22px !important;
  left: 1024px !important;
  top: 345px !important;

  background: #17304D !important;
}*/

/*.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--rounded.theme--dark.v-size--default{
  position: absolute !important;
  width: 22px !important;
  height: 22px !important;
  left: 1024px !important;
  top: 345px !important;

  background: orange !important;
}*/
</style>
