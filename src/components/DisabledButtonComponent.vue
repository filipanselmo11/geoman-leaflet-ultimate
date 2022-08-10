<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn color="primary--text text--darken-4" :disabled="disabled">Botao-1</v-btn>
        <v-btn color="accent" @click="disabled = !disabled">Botao-2</v-btn>
        <!-- <v-btn
          color="primary--text text--darken-4"
          :disabled="disabled"
          @click="alert"
        >
          I have a custom disabled color
        </v-btn>
        <v-btn color="accent" @click="disabled = !disabled">
          Toggle Disabled
        </v-btn> -->
      </v-col>
      <!-- <v-col class="px-8">
        This shows how to customize the color of a disabled button.
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DisabledButtonComponent",
  data: () => ({
    disabled: false,
  }),
  methods: {
    alert() {
      alert("hiya");
    },
  },
};
</script>

<style scoped>

</style>