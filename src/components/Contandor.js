import { Component } from "react";
//PODEMOS UTILIZAR FUNCTIONS EXTERNAS
//A LA CLASE
//EN DICHAS FUNCIONES NO SE PUEDE UTILIZAR NADA
//DE LA CLASE
function miFuncion(){
    console.log("Function externa a la clase");
}
class Contador extends Component{
    //ZONA DE DECLARACION DE VARIABLES
    //LA DECLARACION DE VARIABLE NO UTILIZA NI var , const
    //NI NADA PARA SU DECLARACION
    numero = 1;
    //QUEREMOS UN METODO PARA INCREMENTAR DICHO NUMERO
    incrementarNumero= () =>{
        //PARA ACCEDER A OS OBJETOS/VARIABLES DE LA
        //CLASE UTILIZAMOS this
        console.log("Numero "+this.numero);
        this.numero=this.numero+1;
    }
    //EL CONCEPTO state ES EL MISMO
    //UTILIZAMOS state A NIVEL DE CLASE PARA INICIALIZAR
    //LOS ELEMENTOS DE SU INTERIOR
    //EN ESTE EJEMPLO, UQEREMOS CAMBIAR UN VALOR DE UN CONTADOR
    state = {valor: parseInt(this.props.Inicio)};
    //PARA MODFICAR EL VALOR DEL state UTILIZAMOS UN
    //METODO DE LA CLASE LLAMADO setState
    incrementarValor=()=>{
        this.setState({
            valor: this.state.valor+1
        });
    }

    //TODA LA CLASE DE CONTENER UN render()
    //QUE ES EL DIBUJO Y SE ACTUALIZA CADA VEZ
    //QUE CAMBIAMOS UN state
    //EL CODIGO INTERNO DEL RENDER ES COMO UTILIZAR function()

    render(){
        return(
            <div>
                <h1>Contador JSX ES6</h1>
                <h2 style={{color:"vlue"}}>Inicio: {this.props.Inicio}</h2>
                <h2 style={{color:"vlue"}}>Valor del state: {this.state.valor}</h2>
                {/*LA LLAMADA A LOS METODO DE LA CLASE
                //SE REALIZA DE FORMA MAS SENCILLA  Y SIN PARENTESIS*/}
                <button onClick={this.incrementarValor}>
                    Incrementar valor state
                </button>
                <button onClick={ ()=>{
                    //SI LLAMAMOS A CUALQUIER ELEMENTO FUERA
                    //DE LA CLASE, SE HACE SIN this
                    miFuncion();
                    this.incrementarNumero();
                }}>
                    Pulsa
                </button>
            </div>
        );
    }
}
export default Contador;