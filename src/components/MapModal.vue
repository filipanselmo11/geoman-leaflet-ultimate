<template>
  <v-row justify="center">
    <!-- <div class="text-center"> -->
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar ou Remover Desenho</span>
        </v-card-title>
        <v-card-text>
          <div>
            <v-btn @click="editOnClick" class="grey lighten-4 mx-2"> Editar </v-btn>

            <v-btn @click="removeOnClick" class="grey lighten-4 mx-2"> Remover </v-btn>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="onClose"> Fechar </v-btn>
        </v-card-actions>
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
      this.$emit("editDrawing", e);
      console.log('Edit Button Clicked');
    },
    removeOnClick(e) {
      this.$emit("removeDrawing", e);
      console.log('Remove Button Clicked');
    },
  },
};
</script>

<style></style>
