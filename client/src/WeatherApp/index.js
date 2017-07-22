import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

import { fetchWeather,deleteWeather ,addWeatherComment} from "../actions/weatherActions"

@connect((store) => {
  return {
    boxes: store.weather.boxes,
  };
})
export default class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions
    this.removeWeatherBox = this.removeWeatherBox.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this); 
  }
  
  onSubmitSearchForm(string) {
    this.props.dispatch(fetchWeather(string))
  };

  removeWeatherBox(string) {
    this.props.dispatch(deleteWeather(string))
  };  

  render() {
    const {boxes } = this.props;
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
          cards={boxes}
          removeWeatherBox={this.removeWeatherBox}  />
      </div>
    );
  }
}
 