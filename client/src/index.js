import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';


class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions
    // this.removeWeatherBox = this.removeWeatherBox.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.deleteCity = this.deleteCity.bind(this)

    //Declare local state
    this.state = { cards: [] }
  }


  // deleteCity 

  onSubmitSearchForm(string) {

    var structure = {
      name: string.location.name,
      icon: string.current.condition.icon,
      feelslike_c: string.current.feelslike_c,
      text: string.current.condition.text,
      comments: []
    };

    // this.setState({ cards: this.state.cards.concat(structure) });
    this.setState((prevState) => ({
      cards: prevState.cards.concat(structure)
    }));
    console.log(this.state)
  };


  deleteCity(index) {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((_, i) => i !== index)
    }));
  }


  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
        </div>
        <WeatherListBox cards={this.state.cards} delete={this.deleteCity} />
      </div>
    );
  }
}

export default WeatherApp;