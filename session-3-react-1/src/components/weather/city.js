import sun from '../../img/sun.png';
import hot from '../../img/hot.png';
import blizzard from '../../img/blizzard.png';
import sunblack from '../../img/sunblack.png';
import drops from '../../img/drops.png';

function TiledCity(props) {
    return (
        <div className="row">
                <div className='row'>
                    <div className="column">
                        <div className='weather-data'>
                            <h1>{props.city.name}</h1>
                            <p className="subtitle">Chance of rain: {props.city.main.humidity}%</p>
                            <p className="temperature">{Math.round(props.city.main.temp)}º</p>
                        </div>
                    </div>
                    <div className="column center-vh">
                        <img src={sun} className='weather-img'/>
                    </div>
                </div>
            
                <div className="row data">
                    <p className="title">Air conditions</p>
                    <div className="column">
                        <div className='row'>
                            <div className='column-25 center-h'>
                                <img src={hot} className='weather-icon'/>
                            </div>
                            <div className='column-75'>
                                <p className="category-title">Real feel</p>
                                <p className="category-value">{props.city.main.feels_like}º</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className='row'>
                            <div className='column-25 center-h'>
                                <img src={blizzard} className='weather-icon'/>
                            </div>
                            <div className='column-75'>
                                <p className="category-title">Wind</p>
                                <p className="category-value">{props.city.wind.speed} km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className='row'>
                            <div className='column-25 center-h'>
                                <img src={drops} className='weather-icon'/>
                            </div>
                            <div className='column-75'>
                                <p className="category-title">Chance of rain</p>
                                <p className="category-value">{props.city.main.humidity}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className='row'>
                            <div className='column-25 center-h'>
                                <img src={sunblack} className='weather-icon'/>
                            </div>
                            <div className='column-75'>
                                <p className="category-title">UV Index</p>
                                <p className="category-value">None</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default TiledCity;