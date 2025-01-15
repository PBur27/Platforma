
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Container, CardText } from "react-bootstrap"


function AssetCard({data}) {

    console.log(data)

    const imageUrl = `http://localhost:3000/images/${data.image}`;

    return (
        <Card id="assetCard-xl">
            <CardImg src={imageUrl}/>
            <CardImgOverlay>
                <CardBody>
                    <CardTitle>
                        {data.name}
                    </CardTitle>
                    <CardSubtitle>
                        Tags: {data.tags}
                        <br/>
                        Author: {data.author}
                    </CardSubtitle>
                    <CardText>
                        <br/><br/>
                        {data.description}
                    </CardText>
                </CardBody>
            </CardImgOverlay>
        </Card>
    )
}

export default AssetCard