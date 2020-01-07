import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() =>{
    //initiate a new vue instance
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Inderjit", role:"student" },
                { name: "Alec", role:"student" },
            ]
        },
        methods:{
            logClicked(){
                console.log("clicked on an element");
            }
        }
    }).$mount("#app");
})();