
import { Card } from 'react-bootstrap';

const FishList = (props) => {

    return (

        <Card style={{ border: '1px solid' }}>
            <Card.Body>
                <Card.Title>
                </Card.Title>
                <p><b>Fish Name     : </b>{props.fish.fishName}</p>
                <p><b>Price         : </b>{props.fish.price}</p>
                <p><b>Entry Date    : </b>{props.fish.entryDate}</p>
                <p><b>Duration      : </b>{props.fish.durationInDays} day(s)</p>
                <p><b>Item Weight   : </b>{props.fish.itemWeightInGrams} gr</p>
                <p><b>Origin Country: </b>{props.fish.originCountry}</p>
                <p><b>Season        : </b>{props.fish.season}</p>
                <p><b>Stock Volume  : </b>{props.fish.stockVolumeInKg} kg</p>
                <p><b>Sale Locations: </b>{props.fish.saleLocations}</p>
            </Card.Body>
        </Card>

    )

}

export default FishList;