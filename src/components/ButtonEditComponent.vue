<template>
  <div class="leaflet-bottom leaflet-left">
    <v-btn class="edit-button" @click="saveEditClick">Salvar Edição</v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonEditComponent",
  methods: {
    saveEditClick(e) {
      this.$emit("saveEditClick", e);
      console.log("Save Edit Clicked");
    },
  },
};
</script>

<style scoped>
.edit-button {
  height: 40px !important;
  width: 200px !important;
  text-decoration: none !important;
  text-align: center !important;
  color: white Impo !important;
  line-height: 26px !important;
  padding-top: 6px !important;
  z-index: 5 !important;
}
</style>
