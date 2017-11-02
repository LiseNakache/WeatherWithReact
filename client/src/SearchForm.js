import React from 'react';
import axios from 'axios'

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { city: '' };

    }


    handleSubmit(event){
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
    
        var url = `http://api.apixu.com/v1/current.json?key=2842d0dc19f34f0ea8484619170111&q=${this.state.city}`

        axios.get(url)
        .then(response => {
            this.props.onSubmitSearchForm(response.data);
            this.setState({city: ''});

        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }


    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group-city">
                    <input
                        type="text"
                        className="form-control-city"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({ city: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-city" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default SearchForm;