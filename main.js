var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el:'#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todoList: [
      { text: 'Learn Vue'},
      { text: 'Learn GraphQL'},
      { text: 'Build something awesome'}
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Reverse me',
    title: 'Click to reverse text'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello, Vue!'
  }
})