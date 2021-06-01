import { React, useState, useEffect } from 'react';
import { Day } from './Day';
// import './Week.css';



export const Week = (props) => {
    const {data} = props;
    
    const [days, setDays] = useState([]);

    useEffect(() => {
        var newDays = [];
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        for(let i = 0; i < data.length; i++) {
            let date = new Date(data[i].dt*1000);
            let day = date.getDay()
            let dt = `${date.getMonth()+1}/${date.getUTCDate()}`

            console.log(date);
            console.log(day);

            newDays.push(<Day dt={dt} day={daysOfWeek[day]} temp_high={data[i].temp.max} temp_low={data[i].temp.min} status={data[i].weather[0].id}/>);
        }

        setDays(newDays);
    }, [data])

    return (
        <div className="main-week">
            <ul className="week-list">
                {days.map(day => <li>{day}</li>)}
            </ul>
        </div>
    )
}

