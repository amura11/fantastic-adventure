<template>
    <div>Hi</div>
</template>


<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import { MyDecorator, MyDecorator2 } from "./decorator";

    @Component
    export default class MyView extends Vue {
        
        @MyDecorator2
        @MyDecorator("test")
        private myProperty!: string;
    }
</script>