import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, Container, CardText } from "react-bootstrap"


function AssetCard(assetData) {


    return (
        <Card id="assetCard-lg">
            <CardImg src="" />
            <CardImgOverlay>
                <CardBody>
                    <CardTitle>
                        3D Asset Pack
                    </CardTitle>
                    <CardText>
                        Description
                    </CardText>
                </CardBody>
            </CardImgOverlay>
        </Card>
    )
}

export default AssetCard