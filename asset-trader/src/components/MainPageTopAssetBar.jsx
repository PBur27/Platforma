import { Container, Row, Col } from "react-bootstrap";
import AssetCard from "./AssetCard";
import React, { useEffect, useState } from 'react';

function MainPageTopAssetBar() {

    const [assets, setAssets] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/db')
            .then((response) => response.json())
            .then((data) => {
                setAssets(data);
            })
            .catch((error) => {
                console.error('Error fetching assets:', error);
            });
    }, []);

    return (
        <Container fluid id="topAssetBar">
            <Row>
                {assets.map((asset) => (
                    <Col key={asset.id}>
                        <AssetCard data ={asset} /> {/* Pass asset data to AssetCard */}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MainPageTopAssetBar;