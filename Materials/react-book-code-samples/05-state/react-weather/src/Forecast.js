import { useEffect, useState } from 'react';
import './Forecast.css'

function Forecast ({latitude, longitude, removeCallback}) {
    const [forecast, setForecast] = useState({})

    useEffect( () => {
        console.log('useEffect Forecast!')
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}1&longitude=${longitude}&hourly=temperature_2m`).then(data =>
            data.json()
        ).then(data => {
            console.log('Received data: ', data)
            setForecast(data)
        })

        return (data) => {
            console.log('Forecast > Unmounting ', data)
        }

    }, [latitude, longitude]);

    return (
        <div>
            <div className="Forecast">
                <div>{latitude}º - {longitude}º </div>
                <div>{forecast?.hourly?.temperature_2m[0]}C</div>
                <div className="remove" onClick={removeCallback}>X</div>
            </div>
        </div>
    );
}

export default Forecast;