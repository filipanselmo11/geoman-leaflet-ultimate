<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="60%">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar ou Excluir Desenho</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-btn color="primary" class="mr-4">Editar</v-btn>
                <v-spacer/>
                <v-btn color="red" class="mr-4">Remover</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="onClose" class="mr-4">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      this.dialog = val;
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
  },
};
</script>

<style></style>
