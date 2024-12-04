import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AccountButton from './AccountButton';


function TitleBar() {
    let loginStatus = true;
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
                <AccountButton isLoggedIn={loginStatus}></AccountButton>
            </Container>
        </Navbar >
    );
}

export default TitleBar;