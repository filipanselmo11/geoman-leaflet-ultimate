<template>
  <v-row justify="center">
    <!-- <div class="text-center"> -->
    <v-dialog v-model="dialog" width="500">
      <v-card tile>
        <v-toolbar flat dark color="primary">
          <v-toolbar-title>Editar ou Remover Desenho</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dar text @click="onClose">Fechar</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <br/>
        <v-card-text>
          <div>
            <v-btn @click="editOnClick" class="grey lighten-4 mx-2"> Editar </v-btn>

            <v-btn @click="removeOnClick" class="grey lighten-4 mx-2"> Remover </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- </div> -->
  </v-row>
</template>

<script>
export default {
  name: "MapModal",
  props: {
    mapDialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    mapDialog(val) {
      if (val) {
        setTimeout(() => {
          this.dialog = val;
        }, 100);
      }
    },
  },
  methods: {
    onClose() {
      console.log("Dialog Fechado");
      this.dialog = false;
      this.$emit("mapDialogClosed", {
        dialogClosed: true,
      });
    },
    editOnClick(e) {
      this.$emit("editOnClick", e);
      console.log('Edit Button Clicked');
      this.dialog = false;
    },
    removeOnClick(e) {
      this.$emit("removeOnClick", e);
      console.log('Remove Button Clicked');
      this.dialog = false;
    },
  },
};
</script>

<style></style>
