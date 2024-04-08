const {createApp} = Vue

createApp({
    data(){
        return{
            mainApi: 'https://flynn.boolean.careers/exercises/api/',
        }
    },
    methods:{
        getRandomMails(){
            axios.get(`${this.mainApi}random/mail`).then((response)=>{
                console.log(response.data); //check dei dati provenienti dall'API
            })
            
        }
    },
    created(){
        
    },
    mounted(){
        this.getRandomMails()
    }
}).mount('#app')