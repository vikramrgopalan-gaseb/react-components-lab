import './WeatherForecast.css'

function WeatherForecast (props) {
    const { WeatherForecast } = props
    return (
        <>
            <li>
                <h3>It is: {WeatherForecast.day}</h3>
                <p>The forecast is: {WeatherForecast.conditions}</p>
                <p>The time is: {WeatherForecast.time}</p>
            </li>
        </>
    )
}

export default WeatherForecast;