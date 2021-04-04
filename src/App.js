
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Spinner } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

import FishList from './components/fishList';

import fishFarm from './services/fishFarm';


function App() {
  const myFile = fishFarm ? fishFarm.map((fishItem, index) => {
    return (
      <Col md={3} className='py-3' kex={`${index}col`}>
        <FishList fish={fishItem} />
      </Col>
    )
  })
    : (<Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>)

  return (
    <Container className='border border-primary rounded my-5'>
      <Row >
        <Col className='header'>
          <h1>FISH LIST</h1>
        </Col>
      </Row>
      <Row className='app my-2 mx-1'>
        {myFile}
      </Row>
    </Container>
  )
}

export default App;
