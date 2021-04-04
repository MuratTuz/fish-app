
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Spinner } from "react-bootstrap";

import { Container } from 'react-bootstrap';
import Person from './components/personal/person';
import Friend from './components/friends/friend';
import Child from './components/children/child';

//import readFile from './services/readFile';
import fileURL from './foreigners.json';


function App() {
  const myFile = fileURL ?
    fileURL.map((element, index) => {
      return (
        <Container kex={index} className='border border-danger rounded my-5'>
          <Person data={element} />
          <Child data={element.children} />
          <Friend data={element.friends} />
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
