<template>
    <div class="text-center">
        <v-btn @click="buttonClick" active-class="active">
            <span>Botao</span>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    methods: {
        buttonClick(){
            console.log('botao clicado');
        }  
    },
}
</script>

<style scoped>
:v-deep .active {
    background-color: green !important;
}
</style>