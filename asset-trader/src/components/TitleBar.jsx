import { Container, Navbar, Image } from 'react-bootstrap';
import AccountButton from './AccountButton';

function TitleBar({ isLoggedIn, toggleLogin }) {
    return (
        <Navbar expand="lg" id="titleBar">
            <Container fluid>
                <Navbar.Brand className="ms-2" href="/" id="logo">
                    <Image src="/icon.png" id="logoImage" />
                    <Container>AssetMarketplace</Container>
                </Navbar.Brand>
                <AccountButton isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            </Container>
        </Navbar>
    );
}

export default TitleBar;
