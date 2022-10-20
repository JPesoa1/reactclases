import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumero extends Component{
    
    state={
        hijoNumero:[],
        numeroDinamico:0
    }
    anadirHijo= () =>{
        this.state.hijoNumero.push(1);
        this.setState({
            hijoNumero: this.state.hijoNumero
        })
    }
    metodoPadre = (num) =>{
        console.log(num);
        this.setState({
            numeroDinamico: this.state.numeroDinamico + num
        })
    }
    render(){
        return(
            <div>
                <h1>Numeros Padre</h1>
                <h2 style={{color:"red"}}>La suma es: {this.state.numeroDinamico}</h2>
                <button onClick={()=> this.anadirHijo()}>
                    Nuevo Numero
                </button>
                {
                    this.state.hijoNumero.map((numero,index)=>{
                        return (<HijoNumero metodoPadre={this.metodoPadre}/>);
                    })
                }
                <HijoNumero/>
            </div>
        );
    }
}

export default PadreNumero;