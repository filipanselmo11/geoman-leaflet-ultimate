<template>
  <v-row no no-gutters class="mt-2">
    <v-col cols="12" class="d-flex justify-end align-center">
      <v-tooltip left v-model="show">
        <span @click="salvarEdicao">Salvar Edição</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TooltipComponent",
  props: {
    showTooltip: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    salvarEdicao(e) {
      this.$emit("salvarEdicao", e);
      console.log("Salvar Edicao Clicked");
    },
  },
};
</script>

<style></style>
