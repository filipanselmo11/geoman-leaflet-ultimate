<template>
  <div class="text-center">
    <!-- 
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x</v-menu>
   -->
    <v-menu v-model="menu" :nudge-width="200" offset-x>
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Menu as Popover</v-btn>
      </template> -->
      <v-card dark>
        <v-list>
          <v-list-item>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-btn @click="menu = false">
                <v-icon>mdi-close-box</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item @click="editarOnClick">
            <v-list-item-title>Editar Desenho</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item @click="atribuirEventoOnClick">
            <v-list-item-title>Atribuir Evento</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item @click="atribuirCategoriaOnClick">
            <v-list-item-title>Atribuir Categoria</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item @click="removerDesenhoOnClick">
            <v-list-item-title>Remover Desenho</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "ModalMapComponent",
  props: {
    mapMenu: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menu: false,
    items: [
      {
        title: "Editar Desenho",
      },
      {
        title: "Atribuir Evento",
      },
      {
        title: "Atribuir Categoria",
      },
      {
        title: "Remover Desenho",
      },
    ],
  }),

  watch:{
    mapMenu(val){
      if(val){
        this.menu = val;
      }
    }
  },

  methods: {
    editarOnClick(e) {
      this.$emit('editarOnClick', e);
      console.log("Editar Desenho Clicked");
    },
    atribuirEventoOnClick(e) {
      this.$emit('atribuirEventoOnClick',e);
      console.log("Atribuir Evento Clicked");
    },
    atribuirCategoriaOnClick(e) {
      this.$emit('atribuirCategoriaOnClick',e);
      console.log("Atribuir Categoria Clicked");
    },
    removerDesenhoOnClick(e) {
      this.$emit('removerDesenhoOnClick',e);
      console.log("Remover Desenho Clicked");
    },
  },
};
</script>

<style></style>
