
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Spinner } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

import FishList from './components/fishList';

import fishFarm from './services/fishFarm';


function App() {
  const myFile = fishFarm ?
    fishFarm.map((fishItem, index) => {
      return (
        <Container kex={index} className='app border border-danger rounded my-5'>
          <Row className='app border border-primary rounded my-2 mx-1'>
            <Col md={3} className='py-3'>
              <FishList fish={fishItem} />
            </Col>
          </Row>
        </Container>
      )
    })
    :
    (<Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>)

  return (
    <>
      { myFile}
    </>
  )
}

export default App;
