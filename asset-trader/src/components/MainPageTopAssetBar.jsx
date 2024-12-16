import { Container, Row, Col } from "react-bootstrap";
import AssetCard from "./AssetCard";


function MainPageTopAssetBar() {

    var assetCards = [];

    return (
        <Container>
            <Row>
                <Container id="topAssetsThisWeekBar">
                    <Row>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Col>
                    <AssetCard></AssetCard>
                </Col>
                <Col>
                    <AssetCard></AssetCard>
                </Col>
                <Col>
                    <AssetCard></AssetCard>
                </Col>
                <Col>
                    <AssetCard></AssetCard>
                </Col>
            </Row>
            <Row>
                <Container id="topAssetsThisWeekBar">
                    <Row>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                        <Col>
                            Top Assets This Week
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default MainPageTopAssetBar