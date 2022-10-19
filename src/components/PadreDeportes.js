import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component{
    //CREAMOS UN ARRAY DE DEPORTES EN sta
    //PARA DIBUJARLO EN LA PAGINA
    state = {
        deportes:["Petanca","Curling","Poker","Padel","Paintball"],
        favorito: ""
    }
    metodoPadre =(deporteFavorito)=>{
        this.setState({
            favorito:   deporteFavorito
        });
    }
    render(){

        return(
            <div>
                <h1 style={{color:"red"}}>
                    Su deporte seleccionado/favorito es  {this.state.favorito}
                </h1>
                
                {
                    this.state.deportes.map((deporte,index)=>{

                        return (<HijoDeporte deporte={deporte} key={index} metodoPadre={this.metodoPadre}/>);

                    })
                    //QUEREMOS DIBUJAR CADA DEPORTE , PERO UTILIZANDO
                    //LA ETIQUETA DEL HIJO

                }
            </div>
        );
    }

}

export default PadreDeportes;