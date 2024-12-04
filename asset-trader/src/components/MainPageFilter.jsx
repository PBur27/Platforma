import { Form, Button, Container, Row, Col, FormGroup, FormLabel, FormControl, FormSelect, FormCheck, Dropdown, DropdownToggle, DropdownMenu } from "react-bootstrap";




function MainPageFilter() {
    return (
        <Container fluid className="m-5">
            <Form>
                <Row className="mx-0">
                    <Col xs={6} className="mt-2">
                        <FormGroup controlId="filterName">
                            <FormLabel>Name</FormLabel>
                            <FormControl type="text"></FormControl>
                        </FormGroup>
                    </Col>
                    <Col className="mt-2">
                        <FormGroup controlId="filterPrice">
                            <FormLabel >Price</FormLabel>
                            <FormSelect>
                                <option>
                                    Any
                                </option>
                                <option>
                                    under 5$
                                </option>
                                <option>
                                    5$ - 10$
                                </option>
                                <option>
                                    10$ - 20$
                                </option>
                                <option>
                                    over 20$
                                </option>
                            </FormSelect>
                        </FormGroup>
                    </Col>
                    <Col className="mt-0">
                        <FormGroup controlId="filterStyle">
                            <Dropdown drop="down-centered">
                                <DropdownToggle variant="light" className="pt-2 mt-0 w-50">
                                    Style
                                </DropdownToggle>
                                <DropdownMenu>
                                    {/*Styles to be leaded from backend (maybe)*/}
                                    {['PixelArt', 'Medieval', 'Military', 'Monochrome'].map((option, index) => (
                                        <FormCheck className="ms-1"
                                            key={index}
                                            value={option}
                                            //Count to be added from backend
                                            label={`${option} [0]`}
                                        />
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                    </Col>
                    <Col className="mt-0">
                        <FormGroup controlId="filterType">
                            <Dropdown drop="down-centered">
                                <DropdownToggle variant="light" className="pt-2 mt-0 w-50">
                                    Type
                                </DropdownToggle>
                                <DropdownMenu>
                                    {/*Styles to be leaded from backend (maybe)*/}
                                    {['Animation', 'Building', 'Nature', 'Effect'].map((option, index) => (
                                        <FormCheck className="ms-1"
                                            key={index}
                                            value={option}
                                            //Count to be added from backend
                                            label={`${option} [0]`}
                                        />
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </FormGroup>
                    </Col>
                    <Col className="mt-0">
                        <Button variant="secondary" type="submit" size="lg">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default MainPageFilter;