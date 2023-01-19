/*########################################
                    Importaciones
##########################################*/
//Modulos
import { Link } from 'react-router-dom';

//Estilos
import './ItemDetail.css';

//Componentes
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount.js';

//Core

/*########################################
                    Logica
##########################################*/
const ItemDetail = (props) => {
    const {title, category, description, price} = props.data; 

    return (
        <Card className='card'>
        <Card.Header as="h5">{category}</Card.Header>
        <Card.Body>
          <Card.Title>{title} || price = ${price}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
        <ItemCount stock="10"/>
      </Card>
    )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemDetail;
