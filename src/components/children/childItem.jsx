
import { Col } from 'react-bootstrap';

const ChildItem = (props) => {

    const avatar = props.data.avatar;
    const firstName = props.data.firstName;
    const lastName = props.data.lastName;
    const gender = props.data.gender;
    const birthday = props.data.birthday;

    return (
        <Col>
            <img src={avatar} alt='it cannot be shown' />
            <p><b>Firstname : </b>{firstName}</p>
            <p><b>Lastname : </b>{lastName}</p>
            <p><b>Gender : </b>{gender}</p>
            <p><b>Birthday : </b>{birthday}</p>
        </Col>

    )

}

export default ChildItem;