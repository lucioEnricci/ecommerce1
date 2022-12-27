/*########################################
                    Importaciones
##########################################*/
import './ItemListContainer.css';
import Card from 'react-bootstrap/Card';


/*########################################
                    Logica
##########################################*/
function ItemListContainer(props) {
  return (
    <Card style={{ height: '70vh' }} className="text-center">
      <Card.Body>
        <Card.Title>ItemListContainer</Card.Title>
        <Card.Text>
          {props.greeting}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

/*########################################
                    Exportaciones
##########################################*/
export default ItemListContainer;
