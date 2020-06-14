new Vue({
	el: '#desafio',
	data: {
    title : "Desafio 04",
    description : "Aqui será executado alguns exemplos de Classes dinâmicas",
    feature : true,
		color: 'white',
		backgroundColor : 'green',
		sStyle : "exemplo",
		exercicio4 : false,
		nExercicio4 : 0,
		sClassProgress : 'progress-bar progredindo',
		startProgress : false,
		resetProgress : false,
		sStartProgress : "{'animation' : 'progress-animation 8s'}",
	},
	watch : {
		exercicio4(){
			return ( this.exercicio4 === true ? 'vermelho' : 'preto' )
		},
		notExercicio4(){
			console.log('NEGANDO')
			document.getElementById('negacao').value = ( this.exercicio4 === false ? 0 : 1 );
			return ( this.exercicio4 === false ? 0 : 1 )
		},
		startProgress(){
			console.log( this.startProgress === true ? "'animation': 'progress-animation 8s'" : '' )
			this.resetProgress = this.startProgress;
			return this.startProgress === true ? "'animation': 'progress-animation 8s'" : '';
		},
		resetProgress(){
			console.log( 'resetProgress¹' )
			setTimeout(
				() => {
					this.startProgress = false;
					this.resetProgress = false
				}
				, 7000
			);
		}

	},
  computed : {
    getTitle(){
      return this.title;
    },
    getDescription(){
      return this.description
    },
		getHaveClass(){
			return ( this.backgroundColor == null ? 'Estou sem classe CSS :(' : 'TENHO CLASSE :)' )
		},
		getStyle(){
			console.log( ">> ", this.sStyle )
			return this.sStyle;
		},
		getStyleExec4(){
			return this.nExercicio4 == 1 ? 'preto' : 'vermelho';
		},
		getClassProgress(){
			return  this.startProgress === true ? this.sClassProgress : '';
		}

  },
	methods: {
		iniciarEfeito() {
      this.feature =!this.feature
		},
		iniciarProgresso() {
			console.log(  'iniciarProgresso'  )
			this.startProgress = !this.startProgress;
		},
		setStyle( nClass ){
				this.sStyle = 'exemplo' + nClass
		},
		setExercicio4( nNum ){
			console.log('foi',nNum)
			this.exercicio4 = ( nNum == 1 ? true : false );
		},
	},
})
