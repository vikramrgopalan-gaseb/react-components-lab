import './WeatherForecast.css'

function WeatherForecast (props) {
    const { day } = props
    return (
        <>
            <div className="weather">
                <h2>{day.day}</h2>
                <img src={day.img} alt={day.imgAlt} />
                <p><span>conditions: </span>{day.conditions}</p>
                <p><span>time: </span>{day.time}</p>
            </div>
        </> 
    )
}

export default WeatherForecast;