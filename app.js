new Vue({
  el: '#app',
  data: {
    ingredients: ['meat', 'cheese', 'fruit'],
    people: [
      {name: 'Tony', age: 30, color: 'red'},
      {name: 'Kate', age: 29, color: 'blue'},
      {name: 'Charlie', age: 5, color: 'orange'}
    ],
    hoverOpacity: '0'
  },
  methods: {
    hoverEffect() {
      this.hoverOpacity = '.6';
    }
  }
});
