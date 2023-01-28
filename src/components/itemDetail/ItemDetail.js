/*########################################
                    Importaciones
##########################################*/
//Modulos

//Estilos
import './ItemDetail.css';

//Componentes
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount.js';
import { useState } from 'react';
import {useCartContext} from '../../components/context/CartContext.js'


//Core

/*########################################
                    Logica
##########################################*/

const ItemDetail = (props) => {

  const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0);

  const { id, title, category, description, price } = props.data;


  const { agregarAlCarrito } = useCartContext();
  
  const funcionDelHijoDeGuardarCantidad = (cantidadX) => {
    setCantidadDeProductosAComprar(cantidadX)
  } 

  

  const onAdd = () => {

    if (cantidadDeProductosAComprar !== 0){
        const producto = {
        id:id,
        title: title,
        category: category,
        price: price,
        count: cantidadDeProductosAComprar,
      }

      agregarAlCarrito(producto);
    } else {
      alert(`No te olvides de anadir productos`)
    }
    

  }


  return (
    <Card className='card'>
      <Card.Header as="h5">{category}</Card.Header>
      <Card.Body>
        <Card.Title>{title} || price = ${price}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>

        <ItemCount stock={10} guardarCantidadAComprar = {funcionDelHijoDeGuardarCantidad} />
        <button onClick = {onAdd} className="btn-buy">On Add</button>
      </Card.Body>
      <h2>Mas Productos</h2>
    </Card>
  )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemDetail;
