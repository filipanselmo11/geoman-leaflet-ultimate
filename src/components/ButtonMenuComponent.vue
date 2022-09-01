<template>
    <div>
        <div class="text-center">
            <v-button @click="show" color="red">
                <span>MENU</span>
            </v-button>
        </div>
        <v-menu v-model="showMenu">
            <v-list>
                <v-list-item v-for="index in 4" :key="index">
                    <v-list-item-content>
                        Option {{ index }}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'ButtonMenuComponent',
    data: () => ({
        showMenu: false,
    }),
    methods: {
        show(e) {
            e.preventDefault();
            this.showMenu = true;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        }
    }
}
</script>

<style>
</style>