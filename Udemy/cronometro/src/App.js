import React, {Component} from 'react'
import './style.css'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      relogio: 0.0,
      botao_iniciar:'Iniciar Cronômetro'
    };
    this.tempo = null;
    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  iniciar(){

    // se eu apertar e já tiver algum tempo rodando, eu paro o relógio
    if (this.tempo != null){
      this.setState({botao_iniciar: 'Recomeçar Cronômetro'})
      clearInterval(this.tempo);
      this.tempo = null;
    }
    // caso não tenha tempo rodando, então eu começo de novo o relógio
    else{
      this.setState({botao_iniciar: 'Pausar Cronômetro'})

      this.tempo = setInterval(() => {
        let state = this.state;
        state.relogio += 0.1;
        this.setState(state);
      }, 100);
    }
    
  }

  zerar(){
    // apertei em zerar e cronômetro está rodando
    if (this.tempo != null){
      clearInterval(this.tempo);
      this.tempo = null;
      let state = this.state;
      state.relogio = 0.0;
      state.botao_iniciar = 'Iniciar Cronômetro'
      this.setState(state);
    }
    // apertei em zerar e está pausado
    else{
      let state = this.state;
      state.relogio = 0.0;
      state.botao_iniciar = 'Iniciar Cronômetro'
      this.setState(state);

    }
  }
  // o toFixed do relógio permite que o tempo passe com 1 casa decimal mostrando
  render(){
    return(
      <div id='container'>
        <img src={require('./assets/cronometro.png')} id='imagem'/>
        <span id='temporizador'> {this.state.relogio.toFixed(1)} </span>
        <div id='area-botao'>
          <p className='botao' onClick={this.iniciar}> {this.state.botao_iniciar} </p>
          <p className='botao' onClick={this.zerar}> Zerar Tempo </p>
        </div>
      </div>
    );
  }
}

export default App;