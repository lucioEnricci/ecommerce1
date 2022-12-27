/*########################################
                    Importaciones
##########################################*/

//Modulos
//Estilos

import Card from 'react-bootstrap/Card';

//Componentes
//Core

/*########################################
                    Logica
##########################################*/

function Footer() {
    return (
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Footer</Card.Title>
          <Card.Text>
            Seguinos en nuestras redes y conoce mas sobre nuestro proyecto!
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
  }

/*########################################
                    Exportaciones
##########################################*/

export default Footer;