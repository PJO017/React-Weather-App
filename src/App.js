import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Week } from './Components/Week';
import { Today } from './Components/Today';
import { Error } from './Components/Error';
import { NavLink, Route, Switch } from "react-router-dom";

function App() {
  const [dataCurrent, setDataCurrent] = useState([{
    "lat": 33.44,
    "lon": -94.04,
    "timezone": "America/Chicago",
    "timezone_offset": -21600,
    "current": {
      "dt": 1618317040,
      "sunrise": 1618282134,
      "sunset": 1618333901,
      "temp": 284.07,
      "feels_like": 282.84,
      "pressure": 1019,
      "humidity": 62,
      "dew_point": 277.08,
      "uvi": 0.89,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 6,
      "wind_deg": 300,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "rain": {
        "1h": 0.21
      }
    }}]);

  const [dataDaily, setDataDaily] = useState([{"dt":1622566800,"sunrise":1622543286,"sunset":1622594587,"moonrise":1622526900,"moonset":1622565960,"moon_phase":0.73,"temp":{"day":76.03,"min":60.26,"max":84.67,"night":72.34,"eve":82.54,"morn":60.26},"feels_like":{"day":75.78,"night":71.44,"eve":80.96,"morn":59.32},"pressure":1024,"humidity":52,"dew_point":57.15,"wind_speed":7.83,"wind_deg":141,"wind_gust":19.98,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":35,"pop":0,"uvi":9.91},{"dt":1622653200,"sunrise":1622629670,"sunset":1622681022,"moonrise":1622615220,"moonset":1622656020,"moon_phase":0.75,"temp":{"day":76.32,"min":64.47,"max":76.32,"night":68.36,"eve":73.49,"morn":64.47},"feels_like":{"day":75.81,"night":68.52,"eve":73.08,"morn":64.09},"pressure":1020,"humidity":46,"dew_point":54.01,"wind_speed":7.76,"wind_deg":123,"wind_gust":24.58,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0.02,"uvi":2.46},{"dt":1622739600,"sunrise":1622716055,"sunset":1622767456,"moonrise":1622703360,"moonset":1622745840,"moon_phase":0.79,"temp":{"day":87.73,"min":65.14,"max":90.3,"night":71.78,"eve":73.78,"morn":65.61},"feels_like":{"day":85.62,"night":71.94,"eve":73.9,"morn":65.91},"pressure":1016,"humidity":31,"dew_point":54.03,"wind_speed":14.47,"wind_deg":312,"wind_gust":27.72,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.48,"rain":0.54,"uvi":5.58},{"dt":1622826000,"sunrise":1622802442,"sunset":1622853889,"moonrise":1622791440,"moonset":1622835660,"moon_phase":0.82,"temp":{"day":74.21,"min":66.49,"max":74.21,"night":68.94,"eve":72.32,"morn":66.49},"feels_like":{"day":74.43,"night":69.15,"eve":72.5,"morn":67.26},"pressure":1018,"humidity":66,"dew_point":62.35,"wind_speed":5.95,"wind_deg":281,"wind_gust":9.95,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.7,"rain":3.21,"uvi":6.64},{"dt":1622912400,"sunrise":1622888830,"sunset":1622940321,"moonrise":1622879400,"moonset":1622925360,"moon_phase":0.85,"temp":{"day":86.76,"min":66.6,"max":86.76,"night":71.96,"eve":80.24,"morn":68.41},"feels_like":{"day":86.56,"night":72.75,"eve":81.54,"morn":68.49},"pressure":1017,"humidity":41,"dew_point":60.76,"wind_speed":6.71,"wind_deg":174,"wind_gust":10.69,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.88,"rain":1.43,"uvi":0.52},{"dt":1622998800,"sunrise":1622975220,"sunset":1623026752,"moonrise":1622967360,"moonset":1623015060,"moon_phase":0.89,"temp":{"day":69.46,"min":67.86,"max":70.68,"night":69.13,"eve":69.57,"morn":67.86},"feels_like":{"day":70.57,"night":70.07,"eve":70.59,"morn":68.95},"pressure":1018,"humidity":95,"dew_point":67.93,"wind_speed":5.86,"wind_deg":119,"wind_gust":13.56,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":1,"rain":6.62,"uvi":1},{"dt":1623085200,"sunrise":1623061611,"sunset":1623113182,"moonrise":1623055440,"moonset":1623104820,"moon_phase":0.92,"temp":{"day":76.37,"min":67.77,"max":77.31,"night":70.23,"eve":73.67,"morn":68.7},"feels_like":{"day":77.41,"night":71.28,"eve":74.64,"morn":69.87},"pressure":1020,"humidity":79,"dew_point":69.67,"wind_speed":9.13,"wind_deg":117,"wind_gust":20.2,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.96,"rain":9.63,"uvi":1},{"dt":1623171600,"sunrise":1623148004,"sunset":1623199611,"moonrise":1623143640,"moonset":1623194640,"moon_phase":0.95,"temp":{"day":77.56,"min":68.43,"max":81.55,"night":73.18,"eve":76.84,"morn":69.13},"feels_like":{"day":78.53,"night":73.87,"eve":77.41,"morn":70.07},"pressure":1022,"humidity":75,"dew_point":69.1,"wind_speed":6.98,"wind_deg":145,"wind_gust":13.51,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":94,"pop":0.9,"rain":2.87,"uvi":1}]);
  const [loading, setLoading] = useState(false);
  const owm = "https://api.openweathermap.org/data/2.5/onecall?lat=33.748997&lon=-84.387985&exclude=hourly,current,minutely,alerts&units=imperial&appid=bf901f0418e913024780e3072f114a2f";



  // useEffect(() => {
  //   setLoading(true);
  //   fetch(owm)
  //     .then(response => response.json())
  //     .then(data => {
  //       setDataCurrent(data.current);
  //       setDataDaily(data.daily);
  //       setLoading(false);
  //     })
  // }, [])


  return (
    <div className="App">
      <nav className="navbar">
          <NavLink activeClassName="link" to="/today"><li>Today</li></NavLink>
          <NavLink activeClassName="link" to="/daily"><li>7 Day</li></NavLink>
      </nav>
      <div>
        <Switch>
        <Route path="/today"><Today data={dataCurrent} /></Route>
        <Route path="/daily"><Week data={dataDaily} /></Route>
        <Route><Error /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
