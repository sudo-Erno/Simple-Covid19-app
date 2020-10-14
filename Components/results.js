import React from 'react';
import './resultsStyles.css';

function Results( { covid_stats }) {
    return(
        <div className="results-container">
            {covid_stats.map(data=>(
                <div className="result-container">
                    <div className="result-country">Province/Country: {data?.province || data?.country}</div>
                    <div className="result-confirmed">Confirmed cases:{data.confirmed}</div>
                    <div className="result-death">Death reported: {data.deaths}</div>
                    <div className="result-recovered">Recovered cases: {data.recovered}</div>
                </div>
                
            ))}
        </div>
    );


               
        

}

export default Results;