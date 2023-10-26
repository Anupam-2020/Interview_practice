import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const countries = [
  {name: 'India', id: 'IN', cities: ['Delhi', 'Mumbai']},
  {name: 'USA', id: 'US', cities: ['Los Angeles', 'New York']}
];



function App() {

  const [cities, setCities] = useState(['delhi', 'new york']);

  const selectHandler = (countryId) => {
    console.log(countryId);
    const selectedCountryCities = countries.filter(country => country.id === countryId)[0].cities;
    setCities(selectedCountryCities);
  }

  return (
    <div className="App">
      <select onChange={(e) => selectHandler(e.target.value)}>
        {countries.map((country, index) => {
          return (
            <option value={country.id} key={index}>{country.name}</option>
          )
        })}
      </select>
      <select>
        {cities.map((city, index) => {
          return (
            <option key={index}>
              {city}
            </option>
          )
        })}
      </select>
    </div>
  );
}

export default App;
