/*########################################
                    Importaciones
##########################################*/

//Modulos
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

//Estilos
import './Item.css'

//Componentes
import ItemCount from '../itemCount/ItemCount.js'
//Core

/*########################################
                    Logica
##########################################*/

const Item = (props) => {


    const {title, category, description, price, id} = props.data; 

    return (
        <Card className='card'>
        <Card.Header as="h5">{category}</Card.Header>
        <Card.Body>
          <Card.Title>{title} || price = ${price}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Card.Link><Link to={`/product/${id}`}>Detail of product</Link></Card.Link>
          <br/>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
        <ItemCount stock="10"/>
      </Card>
    )

}

/*########################################
                    Exportaciones
##########################################*/

export default Item;