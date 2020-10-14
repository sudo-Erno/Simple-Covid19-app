import React, { useState, useEffect } from 'react';
import '../bootstrap/dist/css/bootstrap.css';
import './formStyle.css';
import { TextField} from '@material-ui/core';

function Form( { handleSearch, handleCountryName }) {
  const [countryName, setCountryName] = useState(null);
  return (
    <form className="form">
      <div className="form-country-name">
        <TextField type="text" id="standart-basic" label="Enter country" onChange={(event)=>handleCountryName(event)} />
        <small id="textHelp" class="form-text text-muted">In case of an invalid country, we will supply with the global statistics.</small>
      </div><br/>
      <button type="reset" className="btn btn-outline-success" id="submitBtn" onClick={handleSearch}>Search</button>
      
    </form>

  );
}

export default Form;
