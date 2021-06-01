import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';


export const Day = (props) => {
    const { dt, day, temp_high, temp_low, status } = props;

    return (
        <div className="main-day">
            <h4 className="day">{day}</h4>
            <h4 className="dt">{dt}</h4>
            <WeatherIcon iconId={status} name="owm" className="icon"/>
            {/* <i class={"owf owf-" + status + "-d owf-3x ofw-border"}></i> */}
            <p>{ status }</p>
            <div className="data">
                <p className="high">{ temp_high }</p>
                <p className="low">{ temp_low }</p>
            </div>
        </div>
    )
}
