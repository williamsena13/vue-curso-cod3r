new Vue({
    el: '#events',
    data: {
      title : "Eventos",
      count: 0,
      count2: 0,
      count_param : 0,
      parameter_inc : 5,
      x: 0,
      y: 0,
      nValue : 0,
    },
    computed : {
      computedResult(){
        return ( this.count >= 5 ? 'Maior que 5' : 'Menor que 5' );
      },
      result(){
        console.log('RESULT', )
        return (this.nValue == 37 ? 'Valor Igual' : 'Valor Diferente' );
      }
    },
    watch : {
        //count2(novo,antigo){
        //  console.log( novo, antigo );
        //  return this.count2 >= 5 ? "é maior que 5" : "não é maior que 5";
        //},
        result(sOld, sNew){
          console.log( sNew );
          setTimeout(
            () => {
              this.nValue = 0
            }
            , 5000
          );
        },
        count2(novo,antigo){

            //setTimeout(
            //  const instanceVue = this
            //  function() {
            //    instanceVue.count2 = 0
            //  }
            //  , 8000
            //);
            setTimeout(
              () => {
                this.count2 = 0
              }
              , 4000
            );

        },
    },
    methods : {

      f_title(){
        return this.title;
      },
      f_description(){
        this.titulo = 'Olá!! Este bloco utilizo o VueJS para manipular o DOM';
        return this.titulo;
      },
      inc() {
        this.count++;
        return this.count;
      },
      value(){
        return this.count;
      },
      refreshXY(event){
        this.x = event.clientX;
        this.y = event.clientY;
      },
      f_incParam( nInc, evento ){
        console.log( evento );
        this.count_param += Number(nInc);
      },
      f_parameterInc(){
        return this.parameter_inc;
      },
      f_editParameterInc(){
        this.parameter_inc = document.getElementById('edit_parameter_inc').value;
      },
      p_stopPropagation(event){
        event.stopPropagation();
      },
      notNavegation(event){
        console.log('not navegation');
        //event.preventStop()
      },
      showAlert(){
        alert("Atenção! esse é um exemplo do event.keypress. Toda vez que uma tecla for pressioanda, essa msg será exibida");
      },
      f_value(){
        return this.nValue;
      },
      captureValue( event ){
        console.log( event );
        this.nValue = event.target.value;
      },


    }

})
