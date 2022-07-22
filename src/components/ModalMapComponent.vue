<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Menu as Popover</v-btn>
      </template>
      <v-card dark>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-action>
            <v-list-item-title>Enable Hints</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>

        <v-btn text @click="menu = false"> Cancel</v-btn>
        <v-btn color="primary" text @click="menu = false">Save</v-btn>
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
