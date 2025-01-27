import { Container, Row, Col } from "react-bootstrap";
import AssetCard from "./AssetCard";
import React from "react";

function AssetBar({ assets }) {
    return (
        <Container fluid id="topAssetBar">
            <Row>
                {assets.length > 0 ? (
                    assets.map((asset) => (
                        <Col key={asset.id}>
                            <AssetCard data={asset} /> {/* Pass asset data to AssetCard */}
                        </Col>
                    ))
                ) : (
                    <p>No assets found</p>
                )}
            </Row>
        </Container>
    );
}

export default AssetBar;
