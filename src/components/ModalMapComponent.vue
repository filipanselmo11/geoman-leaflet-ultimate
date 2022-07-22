<template>
  <!-- <v-row justify="center"> -->
    <v-menu bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="ma-2" v-bind="attrs" v-on="on">MENU</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="() => {}">
            <v-list-item-title>{{ item.title }}</v-list-item-title> 
        </v-list-item>
      </v-list>
    </v-menu>
  <!-- </v-row> -->
</template>

<script>
export default {
    name: 'ModalMapComponent',
    data:() => ({
        items: [
            {
                title: '1'
            },
            {
                title: '2'
            },
            {
                title: '3'
            },
            {
                title: '4'
            },
        ],
    }),
};
</script>

<style></style>
