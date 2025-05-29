const imageApp = Vue.createApp({
    data() {
     return {
       manyWelds: [
         {name: 'Burrito', url: ''},
         {name: 'Salad', url: ''},
         {name: 'Cake', url: ''},
         {name: 'Soup', url: ''},
         {name: 'Fish', url: ''},
         {name: 'Pizza', url: ''},
         {name: 'Rice', url: ''}
       ]
     }
    }
   })
   imageApp.mount('#imageApp')
