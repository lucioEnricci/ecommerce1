/*########################################
                    Importaciones
##########################################*/

//Modulos
//Estilos
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../cardWidget/CardWidget.js'

//Componentes
//Core

/*########################################
                    Logica
##########################################*/

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hello Green World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Porque Plantamos?" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cambio Climatico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Huella de carbono</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Impacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Porque plantamos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Arboles Nativos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="El Proyecto?" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sobre Nosotros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Donde Plantamos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Nuestros Modelos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Medicion y Seguimiento</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">1 millon de arboles</NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link href="#link">Voluntarios</Nav.Link>
            <Nav.Link href="#link">Dona!</Nav.Link>
            <CardWidget cantidad="10"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


/*########################################
                    Exportaciones
##########################################*/

export default NavBar;
