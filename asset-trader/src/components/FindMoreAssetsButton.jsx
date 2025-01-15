import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function FindMoreAssetsButton() {


    return (
        <Container className="d-grid">
            <Link to='/search'>
                <Button variant="secondary" size="lg" id="more-assets-button">
                    Find More Assets...
                </Button>
            </Link>

        </Container>
    );
}

export default FindMoreAssetsButton;