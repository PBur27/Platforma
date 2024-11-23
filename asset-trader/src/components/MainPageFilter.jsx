import { Form, Button, Container, Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap";




function MainPageFilter() {
    return (
        <Container fluid className="m-5">
            <Form>
                <Row>
                    <Col>
                        <FormGroup controlId="filterName">
                            <FormLabel className="fs-4">Filter assets by name</FormLabel>
                            <FormControl type="text"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="filterType">
                            <FormLabel className="fs-4">Filter assets by name</FormLabel>
                            <FormControl type="text"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button variant="secondary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default MainPageFilter;