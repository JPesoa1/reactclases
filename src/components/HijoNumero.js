import { Component } from "react";

class HijoNumero extends Component{
    num =Math.floor(Math.random()*30);
    
    numeroAlPadre = () =>{
        
       this.props.metodoPadre(this.num);

        
    }

    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>
                    Numero hijo: {this.num}
                </h1>
                <button onClick={()=>this.numeroAlPadre()}>
                    Sumar {this.num}
                </button>

            </div>
        );
    }
}

export default HijoNumero;