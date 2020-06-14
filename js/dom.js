new Vue({
    el: '#dom',
    data: {
      title : "DOM",
      name: 'William Basseto Sena',
      age: (Number( new Date().getFullYear() ) - Number(1995)),
      link: 'http://william.bassena.com.br',
      linkHTML: '<a href="http://william.bassena.com.br">William</a>',
      pathImage: './img/bassenaa.png'
    },
    methods: {
        f_title(){
          return this.title;
        },
       f_description(){
         this.titulo = 'Olá!! Este bloco utilizo o VueJS para manipular o DOM'
         return this.titulo
       },
       p_multiplica(){
         return (this.age * 3);
       },
       p_random(){
         return Math.random(1);
       },
       f_change(){
         console.log(  document.getElementById('edit_name').value );
         this.name = document.getElementById('edit_name').value;
       }
    }
})
