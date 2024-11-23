import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainPageNav() {

    return (
        <Navbar expand="lg" className="bg-body-secondary fs-1">
            <Container fluid>
                <Navbar.Brand className='fs-1 ms-2' href="#home">
                    <img
                        src="../public/icon.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    AssetMarketplace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='mx-4 justify-content-start'>
                    <Nav className='gap-4 me-4'>
                        <Nav.Link href="#home">2D</Nav.Link>
                        <Nav.Link href="#link">Audio</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                    <NavDropdown title="Account" id="basic-nav-dropdown" className='ms-auto'>
                            <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Create an Account
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Asset Creator Page
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default MainPageNav;