/*########################################
                    Importaciones
##########################################*/

//Modulos
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

//Estilos
import './NavBar.css';
import CardWidget from '../cardWidget/CardWidget.js'

//Componentes
//Core

/*########################################
                    Logica
##########################################*/

const NavBar = () => {

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand><Link to='/'>Tienda Virtual</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-flex justify-content-end">
            <Nav.Link><Link to='/products'>Productos</Link></Nav.Link>
            <Nav.Link><Link to='/category/electronics'>Electronica</Link></Nav.Link>
            <Nav.Link><Link to='/category/jewelery'>Joyeria</Link></Nav.Link>
            <NavDropdown title="La Empresa" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/about'>Sobre Nosotros</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Contactenos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to='/cart'><CardWidget cantidad='10' /></Link></Nav.Link>
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
