/*########################################
                    Importaciones
##########################################*/

//Modulos

import { useState } from 'react';
//Estilos
import './ItemCount.css'

//Componentes
//Core

/*########################################
                    Logica
##########################################*/

const ItemCount = (props) => {
    


    //props.stock=15
    
    //No puede restar menos que 0
    
    //No puede sumar mas del stock
    
    
    
    //Agregar Manejo de estado  
    //useState
    const [count, setCount] = useState(0);

    //Funciones de suma y resta

    const addOne = () => {
        if (count < props.stock){
            setCount(count + 1);
        }
    }
    

    const disOne = () => {
        if (count > 0){
            setCount(count - 1);
        }
    }

    //Funcion agregar
    
    const onAdd = () => {
        console.log(count);

    }
    
    return(
        <main className = "main">
            <div className = "main-box-count">
                <div className = "main-box-count-children">
                    <button onClick = {disOne}> - </button>
                    <p> {count} </p>
                    <button onClick = {addOne}> + </button>
                </div>
                <button onClick = {onAdd} className = "main-box-count-onadd"> On Add</button>
            </div>   
        </main>
    )
}


 

/*########################################
                    Exportaciones
##########################################*/

export default ItemCount;