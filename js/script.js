const {createApp} = Vue;

createApp({

  data(){

    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail?',

      mailList: [],
      mail:''


    }
  },

  methods:{
    getApi(){

      console.log('PARTITO AXIOS');

      axios.get(this.apiUrl)

      .then(result =>{
        console.log('result.data', result.data.response);
        this.mail = result.data.response
        this.mailList.push(this.mail)
      })     
      
    }
  },

  mounted(){
    for (i = 0; i < 10; i++) {
      this.getApi();
    }
  }

}).mount('#app')

