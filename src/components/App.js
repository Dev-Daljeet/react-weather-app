import React from 'react';
import Header from './Header';
import CitySelector from './CitySelector';
import '../css/App.css';
import {Container} from 'react-bootstrap';
import UseFetch from '../hooks/UseFetch'
import {API_KEY, API_BASE_URL} from '../apis/config';
import WeatherList from './WeatherList';

const App = () => {
  // destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();

  // error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container>
    <div className="page">
    <Header title="React Weather App" />
    <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)} />
    {getContent()}
    </div>
    </Container>
  );
};

export default App;
