<template>
  <div class="center">
    <input type="checkbox" @click="openModal" />
    <!-- <label for="click" class="click-me"> Click Me</label> -->
    <div class="content">
      <div class="header">
        <h2>Editar ou Remover Desenho</h2>
      </div>
      <div class="mt-5 text-center">
        <v-btn class="grey lighten-4 mx-2"> Editar </v-btn>

        <v-btn class="grey lighten-4 mx-2"> Remover </v-btn>
      </div>
      <div class="line"></div>
      <label for="click" class="close-btn" @click="onClose">Close</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherModalComponent",
  // props: {
  //   mapDialog: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      // dialog: false,
    };
  },
  // watch: {
  //   mapDialog(val) {
  //     this.dialog = val;
  //   },
  // },
  methods: {
    openModal(e) {
      this.$emit('open-modal', e)
    },
    onClose() {
      console.log("Dialog Fechado");
      this.dialog = false;
      this.$emit("mapDialogClosed", {
        dialogClose: true,
      });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#e0eafc, #cfdef3);
  height: 100vh;
  user-select: none;
}

.center,
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#click {
  display: none;
}

.click-me {
  display: block;
  width: 160px;
  height: 50px;
  background: #27ae60;
  border: 1px solid #26a65b;
  color: white;
  text-align: center;
  font-size: 22px;
  line-height: 50px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.5s;
}

.click-me:hover {
  background: #219150;
}

.content {
  opacity: 0;
  visibility: hidden;
  width: 400px;
  height: 350px;
  background: white;
  border-radius: 3px;
  transition: 0.3s ease-in;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
}

#click:checked ~ .content {
  opacity: 1;
  visibility: visible;
}

.header {
  height: 68px;
  background: #27ae60;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
}

.header h2 {
  color: white;
  padding-left: 32px;
  font-weight: normal;
}

.fa-times {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #e8f7fc;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.fa-check {
  font-size: 50px;
  color: #27ae60;
  font-weight: bold;
  height: 80px;
  width: 80px;
  border: 2px solid #27ae60;
  text-align: center;
  padding-top: 13px;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 30px 0 0 160px;
}

p {
  padding-top: 10px;
  font-size: 19px;
  color: #1a1a1a;
  text-align: center;
}

.line {
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 1px;
  background: silver;
}

.close-btn {
  position: absolute;
  bottom: 12px;
  right: 25px;
  border: 1px solid #27ae60;
  border-radius: 3px;
  color: #27ae60;
  padding: 8px 10px;
  font-size: 18px;
  cursor: pointer;
}

.close-btn:hover {
  color: white;
}
</style>
