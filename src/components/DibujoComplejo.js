import { Component } from "react";

class DibujoComplejo extends Component{
    dibujarNumeros = () =>{
        //DECLARAMOS UN ARRAY PARA AMACENAR LOS NUMEROS
        //DICHO ARRAY NO CONTENDRA SOLAMENTE LOS NUMEROS
        //SINO QUE TAMBIEN TENDRA QUE CONTENER EL CODIGO HTML
        var lista = [];
        //UNA LISTA CONTIENE UN METODO push() PARA IR
        //AÑADIENDO ELEMENTOS
        //CREAR UN BUCLE PARA GENERAR NUMEROSS Y AÑADIRLOS
        //A NUESTRA COLECCION
        
        for(var i =1;i<=10;i++){
            var numero = parseInt(Math.random() * 100)+1;
            //EL DIBUJO HTML SE ALMACENA EN LA COLECCION
            //JUNTO A LOS ELEMENTOS A DIBUJAR
            lista.push(<li key={i}>{numero}</li>);

        }
        return lista;
    }
    render(){
        return(
            <div>
                <h1>Dibujar complejos</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        );
    }
}

export default DibujoComplejo;