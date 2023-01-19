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

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Header>App Web created with React JS ||  2023</Card.Header>
      <Card.Body>
        <Card.Title>Footer</Card.Title>
        <Card.Text>
          Seguinos en nuestras redes y conoce mas sobre nuestros productos!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


 

/*########################################
                    Exportaciones
##########################################*/

export default Footer;