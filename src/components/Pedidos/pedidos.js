import React, { Component } from 'react';
import './pedidos.css';

class Pedidos extends Component {
    constructor(props) {
        super(props);
            
            this.state = {pedidos:"" }
    }
    enviarPedido = () =>{
        
    }
    
    carregar = () => {
        fetch('http://localhost:5000/pedidos').then(dados => {
        return dados.json();
    }).then(dados => {
        dados.map((dados, key) => {
            // {this.setState.pedidos`<div key=${key} value=${dados}>
            // </div>`} 
            console.log(dados);
        });
    })
};

render() {
    
    return(
        <div className = "botao" container = "div" >
        <p>Bem vindos</p>
        <button className='iniciarPedido' onClick={this.carregar()}>Iniciar pedido</button>
        <button className="botaoEnviar">Enviar pedido</button>
        </div>
    );
};

}

export default Pedidos;