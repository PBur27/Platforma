import { Container, Row, Col } from "react-bootstrap";
import AssetCard from "./AssetCard";

function AssetBar({ assetsData }) {
  if (!assetsData || assetsData.length === 0) {
    return (
      <Container fluid id="AssetBar">
        <p></p>
      </Container>
    );
  }

  return (
    <Container fluid id="AssetBar">
      <Row>
        {assetsData.map((asset) => (
          <Col key={asset.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <AssetCard data={asset} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AssetBar;
