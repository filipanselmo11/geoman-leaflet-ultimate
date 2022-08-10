<template>
  <v-speed-dial direction="left" transition="slide-x-reverse-transition">
    <v-tooltip top>
      <v-btn @click="toggleOptions" color="accent" tile depressed>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <span>Botao 1</span>
    </v-tooltip>
    <v-tooltip top>
      <v-btn @click.stop="toggleOptionsOptions('button2')" color="accent">
        <v-icon size="20" color="primary">
            mdi-circle
        </v-icon>
      </v-btn>
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
export default {
  name: "OtherDialComponent",
  data:() => ({
    sidebarController:{
        buttons:{
            button1: false,
            button2: false,
        },
    }
  }),
  methods: {
    toggleOptions(){
        if(this.sidebarController.buttons.button1){
            this.sidebarController.buttons.button1 = false;
            this.sidebarController.buttons.button2 = false;
        }
    },
    toggleOptionsOptions(option){
        switch(option){
            case'button2':
                this.sidebarController.buttons.button1 = true;
                this.sidebarController.buttons.button2 = true;
                break;
            default:
                this.sidebarController.buttons.button1 = false;
                break;
        }
    }
  }
};
</script>

<style>
</style>