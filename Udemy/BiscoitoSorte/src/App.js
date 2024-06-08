import React, {Component} from 'react'
import Botao from './components/Botao'
import './style.css'
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.frases = ['A vida trará coisas boas se tiver paciência.', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.', 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.', 'O bom-senso vale mais do que muito conhecimento.', 'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.', 'Aquele que se importa com o sentimento dos outros, não é um tolo.', 'A adversidade é um espelho que reflete o verdadeiro eu.',
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.', 'Uma bela flor é incompleta sem as suas folhas.'
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length); // pega um numero aleatorio e multiplica pelo tamanho do array de frases
                                                                        // Math.floor serve para deixar o numero inteiro
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"  ';
    this.setState(state);
  }

  render(){
    return(


      <div className='container'>
        <img src={require('./assets/biscoito.png')} id='biscoito'/>
        <Botao nome='Abrir Biscoito' funcao={this.quebraBiscoito}/>
        <div id='textoFrase'>
          <h3> {this.state.textoFrase} </h3>
        </div>
        
      </div>
    );
  }
}


export default App;