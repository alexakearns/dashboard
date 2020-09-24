import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const TODAYS_DATE = '2020-09-21'
const API_KEY = process.env.REACT_APP_NASA_API_KEY
const API_URL = `https://api.nasa.gov/planetary/apod?date=${TODAYS_DATE}&hd=tru&api_key=${API_KEY}`

class Nasa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      copyright: null,
      url: null
    }
  }

  componentDidMount() {
    const nasaAPI = API_URL;
    fetch(nasaAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          date: data.date,
          copyright: data.copyright,
          url: data.url
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    let nasa = this.state;
    return (
      <div>

        <h1 className="thumbnail-title">Nasa</h1>
        <Container>
          <Row>
            <img src={nasa.url} alt="nasa daily" id="nasa-image"></img>
          </Row>
          <Row>
            <h4>{nasa.copyright}</h4>
            <h4>{nasa.date}</h4>
          </Row>
        </Container>

      </div>
    )
  }
}

export default Nasa;
