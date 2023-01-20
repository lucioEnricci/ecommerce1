/*########################################
                    Importaciones
##########################################*/
//Modulos

//Estilos
import './ItemDetail.css';

//Componentes
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount.js';

//Core

/*########################################
                    Logica
##########################################*/
const ItemDetail = (props) => {
  const { title, category, description, price } = props.data;

  return (
    <Card className='card'>
      <Card.Header as="h5">{category}</Card.Header>
      <Card.Body>
        <Card.Title>{title} || price = ${price}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <ItemCount stock="10" />
      </Card.Body>
      <h2>Mas Productos</h2>
    </Card>
  )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemDetail;
