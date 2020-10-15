import React, { useEffect, useState } from 'react';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Form from './Components/form';
import './Components/styles.css';
import Table from './Components/table';
import options from './apiKey';

function App() {
  const [covidStats, setCovidStats] = useState([]);

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
