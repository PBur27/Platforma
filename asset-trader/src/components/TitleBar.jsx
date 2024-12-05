import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import AccountButton from './AccountButton';

function TitleBar() {
    let loginStatus = true;
    return (
        <Navbar expand="lg" id='titleBar'>
            <Container fluid>
                <Navbar.Brand className='ms-2' href="#home" id='logo'>
                    <Image src="/icon.png" id='logoImage'>
                        
                    </Image>
                    <Container>
                    AssetMarketplace
                    </Container>
                </Navbar.Brand>
                <AccountButton isLoggedIn={loginStatus}></AccountButton>
            </Container>
        </Navbar >
    );
}

export default TitleBar;