<template>
	<v-btn v-if="button" class="my-botao">
		<span @click="buttonFunction">Botao</span>
	</v-btn>
	<v-btn v-else disabled class="my-botao">
		<span>Botao</span>
	</v-btn>
  <!-- <div v-if="button">
    <v-btn class="my-botao" color="blue">
      <span @click="buttonFunction">Botao</span>
    </v-btn>
  </div> -->
</template>
<script>
export default {
  name: "ButtonActionComponent",
  props: {
    showButton: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    showButton(val) {
      this.button = val;
      console.log("SHOW BUTTON ", this.button);
    },
  },
  data: () => ({
    button: false,
  }),
  methods: {
    buttonFunction() {
      alert("Button Clicked");
    },
  },
};
</script>
<style scoped>
.my-botao {
  position: relative;
  z-index: 99999;
  top: 104px;
  left: 83px;
}
</style>