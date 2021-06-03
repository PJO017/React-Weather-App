import React from 'react'

export const Today = (props) => {
    const { data } = props;


    return (
        <div className="main-today">
            <h1>{ data[0].current.feels_like }</h1>
            <p>Feels Like</p>
            <div className="data">
                <div className="data-col1">
                    <p>High / Low {data[0].current.temp}</p>
                    <p>Humidity {data[0].current.humidity}%</p>
                    <p>Pressure  {data[0].current.pressure}</p>
                    <p>Visibility  {data[0].current.visibility}</p>
                </div>
                <div className="data-col2">
                    <p>Wind {data[0].current.wind_speed}</p>
                    <p>Dew Point  {data[0].current.dew_point}</p>
                    <p>UV Index  {data[0].current.uvi}</p>
                </div>
            </div>
        </div>
    )
}
