import { React, useState, useEffect } from 'react';
import { Day } from './Day';
// import './Week.css';



export const Week = (props) => {
    const {data} = props;
    
    const [days, setDays] = useState([]);

    useEffect(() => {
        var newDays = [];

        for(let i = 0; i < data.length; i++) {
            newDays.push(<Day data={data[i]} />);
        }

        setDays(newDays);
    }, [data])

    return (
        <div className="main-week">
            <ul className="week-list">
                {days.map(day => <div className="day">{day}</div>)}
            </ul>
        </div>
    )
}

