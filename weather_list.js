
import React from 'react';
import {connect} from 'react-redux';

class WeatherList extends React.Component{
  constructor(){
    super();
  }
  renderWeather(cityData){
    console.log('hola mundo');
    console.log(cityData);
    return(
      <tr>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};//equ {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
