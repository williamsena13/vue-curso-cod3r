new Vue({
    el: '#dom',
    data: {
      titulo : String,
      name: 'William Basseto Sena',
      age: (Number( new Date().getFullYear() ) - Number(1995)),
      link: 'http://william.bassena.com.br',
      linkHTML: '<a href="http://william.bassena.com.br">William</a>',
      pathImage: './img/bassenaa.png'
    },
    methods: {
       saudacao(){
         this.titulo = 'Bom dia!!'
         return this.titulo
       },
       p_multiplica(){
         return (this.age * 3);
       },
       p_random(){
         return Math.random(1);
       },
       f_title(){
         return this.name;
       },
       f_change(){
         console.log(  document.getElementById('edit_name').value );
         this.name = document.getElementById('edit_name').value;
       }
    }
})
