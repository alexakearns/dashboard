import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nasa from './nasa';
import Weather from './weather'
import '../app.css'

class Dashboard extends Component {

  render() {
    return(
      <div>
        <Container>
          <h1 id='greeting'>Alexa's Daily Dashboard</h1>
        </Container>
        <Container>
          <Row>
            <Col>
              <Nasa />
            </Col>
            <Col>
              <Weather />
            </Col>
          </Row>
        </Container>
        
      </div>
    )
  }
}

export default Dashboard;
