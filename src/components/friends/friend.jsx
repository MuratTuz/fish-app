
import { Row, Col } from 'react-bootstrap';
import FriendItem from './friendItem';

const Friend = (props) => {

    return (
        <Row className='border border-success rounded my-2 mx-1'>
            <Col>
                <h3>Friends</h3>
            </Col>
            {props.data.map((element, index) =>
                <FriendItem data={element} key={index} />
            )}
        </Row>
    )

}

export default Friend;