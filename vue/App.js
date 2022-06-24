const app = Vue.createApp({
    data(){
        return {
            showbooks: true,
            Name: 'Shlok Mohanty',
            Dance_Style: 'Hip-Hop',
            age: 22 
        }
    },
    methods: {
        toggleShowBooks() {
            this.showbooks = this.showbooks
        }
    }
})
app.mount("#app")

