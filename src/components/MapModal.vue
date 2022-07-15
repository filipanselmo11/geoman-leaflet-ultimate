<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title> Privacy Policy</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="dialog = false">
            Accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="50%">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar ou Excluir Desenho</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
              <h1>CONTEUDO DO DIALOG</h1>
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
  </v-row> -->
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
    editOnClick() {
      this.$emit("");
    },
    removeOnClick() {
      this.$emit("");
    },
  },
};
</script>

<style></style>
