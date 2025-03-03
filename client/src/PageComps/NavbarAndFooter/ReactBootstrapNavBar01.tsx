// hybrid of advanced and basic, with customization and inclusion of button

import {Link, useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {

    const location = useLocation(); // Get current pathname, so we can diff against path of displayed nav links

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="main-color">
            <Container
                fluid
            >
                {/*"fluid" attribute above will space this far left / far right*/}
                {/*<Navbar.Brand href="#home">Family Hockey Playdate</Navbar.Brand>*/}
                <Navbar.Brand href="/home">Family Hockey Playdate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home" className={location.pathname === "/home" ? "active-link" : ""}>Home</Nav.Link>
                        <Nav.Link href="/stick" className={location.pathname === "/stick" ? "active-link" : ""}>Sticks</Nav.Link>
                        <Nav.Link href="/puck" className={location.pathname === "/puck" ? "active-link" : ""}>Pucks</Nav.Link>
                        <Nav.Link href="/skate" className={location.pathname === "/skate" ? "active-link" : ""}>Skates</Nav.Link>
                        {/*below replaced by above*/}
                        {/*<Nav.Link href="/">Home</Nav.Link>*/}
                        {/*<Nav.Link href="/stick">Sticks</Nav.Link>*/}
                        {/*<Nav.Link href="/puck">Pucks</Nav.Link>*/}
                        {/*<Nav.Link href="/skate">Skates</Nav.Link>*/}
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                        {/*<Nav.Link eventKey={2} href="#memes">*/}
                        {/*    Dank memes*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link>
                            <Link type='button' className='btn btn-outline-light' to='/login'>Sign in</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
