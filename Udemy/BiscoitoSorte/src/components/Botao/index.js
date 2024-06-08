import React, {Component} from 'react'
import '../../../src/style.css'

class Botao extends Component{
    render(){
        return(
            <div class='botao'>
                <button onClick={this.props.funcao}> {this.props.nome} </button>
            </div>
        );
    }
}

export default Botao;