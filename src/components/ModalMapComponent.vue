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
          <v-list-item v-for="(item, index) in items" :key="index" @click="() => {
          }">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>

        <!-- <v-btn text @click="menu = false"> Cancel</v-btn>
        <v-btn color="primary" text @click="menu = false">Save</v-btn> -->
      </v-card>
    </v-menu>
  </div>
  <!-- <v-row justify="center">
    <v-menu bottom offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" v-bind="attrs" v-on="on">MENU</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="() => {}">
            <v-list-item-title>{{ item.title }}</v-list-item-title> 
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row> -->
</template>

<script>
export default {
  name: "ModalMapComponent",
  data: () => ({
    fav: true,
    menu: true,
    message: false,
    hints: true,
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
};
</script>

<style></style>
