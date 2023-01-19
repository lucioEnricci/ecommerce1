/*########################################
                    Importaciones
##########################################*/

//Modulos

import { useState,useEffect } from 'react';

//Estilos
import './ItemList.css';

//Componentes
import Item from '../item/Item.js'


/*########################################
Logica
##########################################*/
const ItemList = (props) => {


        const [productos, setProductos] = useState([]);

    //Nuestra API de productos
    //--------archivo JSON

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(json => setProductos(json.map(productos => <Item key ={productos.id} id={"producto" + productos.id} data={productos}/>)))
            },[]);

            return (
                <div>
                    {productos}
                </div>
    )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemList;
