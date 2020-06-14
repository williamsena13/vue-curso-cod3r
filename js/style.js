new Vue({
    el : '#style',
    data: {
      title : "Estilos Dinâmicos e Classes CSS",
      description : "Nesse bloco será utilizado o CSS de forma dinámica com VueJS",
      applyC1 : true,
      classCSS : 'c1',
      applyRotate : false,
      color : 'red',
      largura: 100,
      altura: 20,
    },
    computed: {
        style01(){
          return {
            c1 : this.applyC1,
            c2 : !this.applyC1,
          }
        },
        getDescription(){

          return this.description;
        },
        getTitle(){
          this.title
          return this.title;
        },
        getStyle(){
          return {
            backgroundColor: this.color,
            width: this.largura + 'px',
            height: this.altura + 'px'

          }
        },
        

    },
    methods : {
        //getDescription(){}

    }

})
