
import { Row, Col } from 'react-bootstrap';
import ChildItem from './childItem';

const Child = (props) => {

    return (
        <Row className='border border-warning rounded my-2 mx-1'>
            <Col>
                <h3>Children</h3>
            </Col>
            {props.data.map((element, index) =>
                <ChildItem data={element} key={index} />
            )}
        </Row>
    )

}

export default Child;