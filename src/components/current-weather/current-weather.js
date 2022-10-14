import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">Boston</p>
                <p className="weather-description">Sunny</p>
            </div>
            <img alt="weather logo or smth" className="weather-icon" src="../icons/01d.png"/>
        </div>
    );
}

export default CurrentWeather;