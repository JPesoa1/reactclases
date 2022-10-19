import { Component } from "react";

class HijoDeporte extends Component{
    
    seleccionarFavorito = () =>{
        var deporte=this.props.deporte;
       this.props.metodoPadre(deporte)
        
    }
    render(){

        return(
            <div>
                
                <h1>
                    {this.props.deporte}
                </h1>   


                <button onClick={()=>this.seleccionarFavorito()}>
                    Seleccionar favorito
                </button>
            </div>
        );
    }

}

export default HijoDeporte;