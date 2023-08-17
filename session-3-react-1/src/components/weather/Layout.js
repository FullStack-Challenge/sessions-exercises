import React from 'react';
import '../../css/Weather.css';

import TiledCity from './city';
import NotFoundCity from './notFoundCity';
import OpenWeatherFacade from '../../services/OpenWeatherFacade';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.openWeatherFacade = new OpenWeatherFacade();
    this.keySearchByCity = this.keySearchByCity.bind(this);
    this.state = {city: undefined};
  }

  componentDidMount() {
    this.openWeatherFacade.fetchByCityName("Madrid")
      .then(response => response.json())
      .then(data => this.setState({ city: data }))
      .catch(error => console.log(error));
  }

  keySearchByCity(event){
    console.log('put');
    if (event.key === 'Enter' && event.target.value !== '') {
      this.openWeatherFacade.fetchByCityName(event.target.value)
        .then(response => response.json())
        .then(data => {
          if (data.cod === 200) {
            this.setState({ city: data });
          } else {
            this.setState({ city: {} });
          }
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='search'>
          <input type='text' placeholder='Search for cities...' onKeyDown={this.keySearchByCity}/>
        </div>

        {(this.state.city == undefined || Object.keys(this.state.city).length == 0)
          ? <NotFoundCity />
          : <TiledCity city={this.state.city}/>
          }
      </div>
    );
  }
}

export default Layout;