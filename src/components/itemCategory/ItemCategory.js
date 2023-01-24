/*########################################
                    Importaciones
##########################################*/

//Modulos

import { useState,useEffect } from 'react';

//Estilos
import './ItemCategory.css';

//Componentes
import Item from '../item/Item.js';


/*########################################
Logica
##########################################*/
const ItemCategory = (props) => {


        const [productos, setProductos] = useState([]);

    //Nuestra API de productos
    //--------archivo JSON

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${props.category}`)
                .then(response => response.json())
                .then(json => setProductos(json.map(productos => <Item key ={productos.id} id={"producto" + productos.id} data={productos}/>)))
            },[productos, props.category]);

            return (
                <div>
                    {productos}
                </div>
    )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemCategory;
