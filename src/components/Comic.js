import { Component } from "react";

class Comic extends Component{
    eliminarComic = () =>{
        this.props.eliminarComic()
    }
    seleccionarComic = () =>{
        this.props.seleccionarFavorito(this.props.comic);
    }
    render(){
        return(
            <div>
                <h1>{this.props.comic.titulo}</h1>
                <h3>{this.props.comic.descripcion}</h3>
                <img src={this.props.comic.imagen} alt="" style={{width:"150px",height:"150px"}}/>
                <button onClick={()=>this.seleccionarComic()}>
                    Seleccionar favorito
                </button>
                <button style={{color:"red"}} onClick={()=>this.eliminarComic(parseInt(this.props.index))}>
                    Eliminar comic
                </button>
            </div>
        );
    }
}

export default Comic;