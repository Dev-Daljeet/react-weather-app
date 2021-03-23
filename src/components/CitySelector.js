import React, {useState} from 'react';
import {Row, Col, FormControl} from 'react-bootstrap';
import '../css/App.css';

const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(city);
    }};

  return (
    <>
      <Row>
        <Col>
          <h3>Search your city</h3>
        </Col>
      </Row>

      <Row>
        {/* xs={4} takes the one third  of the page*/}
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter your city name here"
            // update city value with the user's input
            onChange={(event) => setCity(event.target.value)}
            // value will be the currently selected city
            value={city}
            onKeyDown={onKeyDown}
            />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* event handler for button click */}
          <button className="btn" onClick={() => onSearch(city)}>Check Weather</button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;