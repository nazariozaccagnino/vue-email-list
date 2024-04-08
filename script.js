const {createApp} = Vue

createApp({
    data(){
        return{
            mainApi: 'https://flynn.boolean.careers/exercises/api/',
            randomMails: [],
        }
    },
    methods:{
        getRandomMails(){
            for(let i = 0; i<10; i++){
            axios.get(`${this.mainApi}random/mail`).then((response)=>{
                const mailArray= [];
                // console.log(response.data); //check dei dati provenienti dall'API
                    mailArray.push(response.data.response)
                    this.randomMails = mailArray
                    console.log(this.randomMails);
            
            })
        }
        }
    },
    created(){
        
    },
    mounted(){
        this.getRandomMails()
    }
}).mount('#app')