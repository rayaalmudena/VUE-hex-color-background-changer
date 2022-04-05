Vue.createApp({
    data() {
        return {
            bgColor: '#FFFFFF'
        }
    },
    methods: {
        changeColor(){
            this.bgColor="#"+Math.floor(Math.random()*16777215).toString(16);
        }
    }
}).mount('#app')