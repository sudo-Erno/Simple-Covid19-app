import React, { useEffect, useState } from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Form from './Components/form';
import './Components/styles.css';
import Result from './Components/results';
import Table from './Components/table';

function App() {
  const [covidStats, setCovidStats] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/v1/stats',
    params: {country: ''},
    headers: {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '226a9fbbd2msh3098f86f2468cdap1c076djsn8554e634c93c'
    }
  };
  
  function capitalize(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);  
  }
  
  function handleCountry(e){
    options.params.country = capitalize(e.target.value);
  }
    
  function handleSearch(){
    axios.request(options).then(r=>(setCovidStats(r.data.data.covid19Stats))).catch(e=>console.log(e));
  }

  return (
    <div className="general-container">
      <h1 className="display-3">Covid-19 Statistics</h1>
      <Form handleSearch={()=>handleSearch()} handleCountryName={(event)=>handleCountry(event)} /> 
      <div className="table-container">
        <Table covid_stats={covidStats} /> 
      </div>
    </div>
  );
}

export default App;
