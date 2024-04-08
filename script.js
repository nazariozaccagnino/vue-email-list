const { createApp } = Vue

createApp({
    data() {
        return {
            mainApi: 'https://flynn.boolean.careers/exercises/api/',
            randomMails: [],
        }
    },
    methods: {
        getRandomMails() {
            const mailArray = [];
            for (let i = 0; i < 10; i++) {
                axios.get(`${this.mainApi}random/mail`).then((response) => {
                    // console.log(response.data); //check dei dati provenienti dall'API
                    mailArray.push(response.data.response)
                    // console.log(this.randomMails);
                    this.randomMails = [...mailArray]

                })
            }
        }
    },
    created() {

    },
    mounted() {
        this.getRandomMails()
    }
}).mount('#app')