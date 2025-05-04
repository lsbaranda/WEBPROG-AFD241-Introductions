const imageApp = Vue.createApp({
    data() {
     return {
       manyWelds: [
         {name: 'Burrito', url: 'https://www.w3schools.com/vue/img_burrito.svg'},
         {name: 'Salad', url: 'https://www.w3schools.com/vue/img_salad.svg'},
         {name: 'Cake', url: 'https://www.w3schools.com/vue/img_cake.svg'},
         {name: 'Soup', url: 'https://www.w3schools.com/vue/img_soup.svg'},
         {name: 'Fish', url: 'https://www.w3schools.com/vue/img_fish.svg'},
         {name: 'Pizza', url: 'https://www.w3schools.com/vue/img_pizza.svg'},
         {name: 'Rice', url: 'https://www.w3schools.com/vue/img_rice.svg'}
       ]
     }
    }
   })
   imageApp.mount('#imageApp')

// Create a Vue 3 application instance for the Favorites Gallery
Vue.createApp({
    data() {
      return {
        // Array of photo objects, each with a 'src' pointing to the image path
        photos: [
          { src: 'assets/images/img-1.gif' },
          { src: 'assets/images/img-2.jpg' },
          { src: 'assets/images/img-3.jpg' },
          { src: 'assets/images/img-4.jpg' },
          { src: 'assets/images/img-5.jpg' }
        ]
      };
    },