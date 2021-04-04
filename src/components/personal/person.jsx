
import { Row, Col, Card } from 'react-bootstrap';

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Person = (props) => {

    const friendNumber = Object.keys(props.data.friends).length;
    const childNumber = Object.keys(props.data.children).length;
    const avatar = props.data.avatar;
    const firstName = props.data.first_name;
    const lastName = props.data.last_name;
    const email = props.data.email;
    const gender = props.data.gender;
    const salary = props.data.salary;
    const address = props.data.address;

    return (
        <Row className='border border-primary rounded my-2 mx-1'>
            <Col md={3} className='py-3'>
                <Card style={{ border: '1px solid' }}>
                    <Card.Img variant="top" src={avatar} />
                    <Card.Body>
                        <Card.Title>
                            <p><b>Children : </b>{childNumber}</p>
                            <p><b>Friends : </b>{friendNumber}</p>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={9} className='pt-5'>
                <Row>
                    <Col>
                        <h3>Personal</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><b>Lastname : </b>{lastName}</p>
                        <p><b>Firstname : </b>{firstName}</p>
                    </Col>
                    <Col>
                        <p><b>Address : </b>{address}</p>
                        <p><b>Salary : </b>{salary}</p>
                    </Col>
                    <Col>
                        <p><b>Gender : </b>{gender}</p>
                        <p><b>Email : </b>{email}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default Person;