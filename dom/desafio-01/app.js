new Vue({
    el: '#app',
    data: {
      titulo: 'Usando VueJS Basico',
      link: 'http://william.bassena.com.br',
      linkHTML: '<a href="http://william.bassena.com.br">William</a>'
    },
    methods: {
       saudacao(){
         this.titulo = 'Bom dia!!'
         return this.titulo
       }
    }
})
