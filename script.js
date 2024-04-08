const {createApp} = Vue

createApp({
    data(){
        return{
            mainApi: 'https://flynn.boolean.careers/exercises/api/',
            randomMails: null,
        }
    },
    methods:{
        getRandomMails(){
            axios.get(`${this.mainApi}random/mail`).then((response)=>{
                console.log(response.data); //check dei dati provenienti dall'API
                this.randomMails = response.data.response
            })
            
        }
    },
    created(){
        
    },
    mounted(){
        this.getRandomMails()
    }
}).mount('#app')