import "./style.css";
import bg from './img/weather-header.jpeg'


export default function Header () {
    return (
        <div className="bg-div">
            <img src={bg} alt="background" className="bg-img" />
            <p className="title">Weather App</p>
        </div>
    )
}