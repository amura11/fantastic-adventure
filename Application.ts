import "reflect-metadata";
import Vue from "vue";
import Main from "./Main.vue";

Vue.mixin({
	beforeCreate() {
        console.log(`Reading metadata from mixin: ${Reflect.getMetadata("myMetadataKey", this)}`);
	}
});

new Vue({
    render: (h) => h(Main)
}).$mount("#app");