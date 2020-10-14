import React from 'react';
import '../bootstrap/dist/css/bootstrap.css';
import './styles.css';

function Table( { covid_stats }) {
    console.log(covid_stats);
    return (
        <div>
            <table class="table table-hover ">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Country/Province</th>
                    <th scope="col">Confirmed cases</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Recovered cases</th>
                    </tr>
                </thead>
                <tbody>
                    {covid_stats.map(data=>(
                    <tr key={data.keyID}>
                    <td className="display-4">{data?.keyId.split(",")[0] ||data?.province || data?.country}</td>
                    <td className="display-4">{data.confirmed}</td>
                    <td className="display-4">{data.deaths}</td>
                    <td className="display-4">{data.recovered}</td>
                    </tr>                              
                    ))}    
                </tbody>
            </table>
        </div>
    );
}

export default Table;