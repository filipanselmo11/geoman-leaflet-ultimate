<template>
    <div>
        <div class="d-flex justify-center ma-4">
            <v-card :ripple="false" class="portrait" img="https://picsum.photos/1920/1080?random" height="300"
                width="600" @contextmenu="show"></v-card>
        </div>
        <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
            <v-list>
                <v-list-item v-for="index in 4" :key="index">
                    <v-list-item-title>Option {{ index }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'MenuComponent',
    data: () => ({
        showMenu: false,
        x: 0,
        y: 0,
    }),
    methods: {
        show(e) {
            e.preventDefault();
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        }
    }
}
</script>

<style>
</style>