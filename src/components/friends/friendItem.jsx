
import { Col } from 'react-bootstrap';

const FriendItem = (props) => {

    const avatar = props.data.avatar;
    const firstName = props.data.firstName;
    const lastName = props.data.lastName;
    const gender = props.data.gender;
    const salary = props.data.salary;
    const address = props.data.address;
    const city = props.data.city;
    const birthday = props.data.birthday;
    const language = props.data.language;
    const profession = props.data.profession;
    const phone = props.data.phone;

    return (
        <Col>
            <img src={avatar} alt='it cannot be shown' />
            <p><b>Firstname : </b>{firstName}</p>
            <p><b>Lastname : </b>{lastName}</p>
            <p><b>Gender : </b>{gender}</p>
            <p><b>Profession : </b>{profession}</p>
            <p><b>Language : </b>{language}</p>
            <p><b>Birthday : </b>{birthday}</p>
            <p><b>Salary : </b>{salary}</p>
            <p><b>Address : </b>{address}</p>
            <p><b>City : </b>{city}</p>
            <p><b>Phone : </b>{phone}</p>
        </Col>

    )

}

export default FriendItem;