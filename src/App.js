import { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {Current} from './components/Current'
import {Forecast} from './components/Forecast'


function App() {

  const [city, setCity] = useState('');
  const [cityClicked, setCityClicked] = useState('');
  const [regionClicked, setRegionClicked] = useState('');
  const [countryClicked, setCountryClicked] = useState('');
  const [citySuggestion, setcitySuggestion] = useState([]);
  const [currentweather, setCurrentweather] = useState();
  const [forecastweather, setForecastweather] = useState();
  const [isClicked, setisClicked] = useState(false);

  const apiAutocompleteURL = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q='
  const forecastURL = (clickedCity) => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${clickedCity}&days=7&aqi=no&alerts=no`

  const handleselectedCity = async (city) => {
    const clickedCity = city;
    console.log('Clicked City', clickedCity)
    setCity(clickedCity);
    setisClicked(true);
    setcitySuggestion([]);
    const resp = await fetch(forecastURL(clickedCity));
    const respdata = await resp.json();
    console.log('ForeCast response', respdata);
    setCityClicked(respdata.location.name);
    setRegionClicked(respdata.location.region);
    setCountryClicked(respdata.location.country);
    //console.log('ForeCast location', respdata.location.name);
    setCurrentweather(respdata.current);
    setForecastweather(respdata.forecast);
  }

  useEffect(() => {

    const callApiaftertimeout = setTimeout(() => {
      const funcAutocomplete = async () => {
        const resp = await fetch(apiAutocompleteURL + city);
        const respdata = await resp.json();
        //console.log(respdata);
        const cityDetails = respdata.map((Curdata) => `${Curdata.name},${Curdata.region},${Curdata.country}`);
        //console.log('......', cityDetails);
        setcitySuggestion(cityDetails);
      }
      if (!isClicked && city.length > 2) {
        funcAutocomplete();
      } else {
        setcitySuggestion([]);
        setisClicked(false);
      }
    }, 1000);
    return () => clearTimeout(callApiaftertimeout);
  }, [city])


  return (
    <div className='container mt-5 bg-primary bg-gradient shadow-lg p-5 rounded'>


      <div className='d-flex justify-content-center'>
      

        <div className="input-group w-50">
          {/* <span className="input-group-text" id="basic-addon1">LOCATION</span> */}
          <input type="text" className="form-control" placeholder="ENTER CITY NAME" value={city} onChange={(event) => setCity(event.target.value)} />
        </div>
      </div>


      <div className="overflow-auto" >

        {citySuggestion.map((city) => (
          <div className='w-50 mx-auto text-center p-1 bg-white bg-info bg-opacity-10 border border-info border-start rounded border-opacity-25 text-white' style={{ cursor: 'pointer' }} onClick={() => handleselectedCity(city)}>{city}</div>
        ))}

      </div>
      


      {/* {citySuggested.map((city)=>(<div>{city}</div>))} */}
      
      {currentweather && <Current currentweather={currentweather} city={cityClicked} region={regionClicked} country={countryClicked}  />}
      {forecastweather && <Forecast forecastweather={forecastweather} city={cityClicked} region={regionClicked} country={countryClicked} />}

    </div>
  );
}

export default App;
