import { WeatherIcon } from 'weather-react-icons';
import '../css/weather-icons.css';
import '../css/weather-icons.min.css';
import '../css/weather-icons-wind.min.css';

export const Day = (props) => {
    const { data } = props;

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(data.dt*1000);
    const day = daysOfWeek[date.getDay()];
    const dt = `${date.getUTCDate()}`
    const temp_high = Math.round(data.temp.max)+"°";
    const temp_low = Math.round(data.temp.min)+"°";
    const status = data.weather[0].description;
    const iconw = data.weather[0].id;
    const icon = data.weather[0].icon;
    const prep = data.pop * 100;
    const wind = Math.round(data.wind_speed);


    return (
        <div className="main-day">
            <p className="date">{day} {dt}</p>
            <div className="temp">
                <p className="high">{ temp_high }</p>
                <p className="low">/{ temp_low }</p>
            </div>
            <div className="status">
                {/* <img className="icon" src={"http://openweathermap.org/img/wn/"+ icon +"@2x.png" } alt="icon"/> */}
                {/* <WeatherIcon className="icon" iconId={iconw} name="owm" /> */}
                <i class={"wi wi-owm-"+iconw}></i>
                <p>{status}</p>
            </div>
            <i class="wi wi-raindrop"></i><p className="prep">{ prep }%</p>
            <i class="wi wi-strong-wind"></i><p>{ wind } mph</p>
        </div>
    )
}
