import './WeatherForecast.css'

function WeatherForecast (props) {
    const { day } = props
    return (
        <>
            <li>
                <h3>It is {day.day}</h3>
                <p>The forecast is: {day.conditions}</p>
                <p>The time is: {day.time}</p>
            </li>
        </>
    )
}

export default WeatherForecast;

