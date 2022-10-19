import { Component } from "react";

class DibujoComplejoArray extends Component{
    //ALMACENAMOS DENTRO DEL STATE UN ARRAY
    //DEL STRING (nombres)
    state={
        nombres: ["Lucia","Carlos","Javier","Nazar","Paco"]

    }
    nuevoNombre = () =>{
        this.state.nombres.push("CR7");
        this.setState({
            nombres: this.state.nombres
        }) 
    }
    render(){
        return(
            <div>
                <h1>Dibujo Complejo Array</h1>
                <button onClick={()=> this.nuevoNombre()}>
                    Crear nombres
                </button>
                {
                    //CODIGO LOGICO CON  LENGUAJE REACT
                    this.state.nombres.map((name,index)=>{
                        //ESTE CODIGO SE EJECUTA POR CADA ELEMENTO
                        //NUNCA PODEMOS DEJARLO VACIO
                        //SIEMPRE DEBE DDEVOLVER UN return
                        return(<h3 style={{color:"green"}}>{name}</h3>);
                    })
                }
            </div>
        );
    }
}

export default DibujoComplejoArray;