/*########################################
                    Importaciones
##########################################*/
//Modulos

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Estilos
import './ItemDetailContainer.css';

//Componentes
import ItemDetail from '../itemDetail/ItemDetail.js';
import { Link } from 'react-router-dom';


/*########################################
                    Logica
##########################################*/
const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([]);

    const { productId }=  useParams();

    useEffect(() =>{

      fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(productos => setProductos(<ItemDetail key ={productos.id} id={"producto" + productos.id} data={productos}/>))
    }, [productId])
    
    return (
        <div>
            <Link to='/products'> Volver a los productos  </Link>
            {productos}
        </div>
    )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemDetailContainer;
