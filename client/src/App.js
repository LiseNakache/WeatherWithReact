import React from 'react';
import ReactDom from 'react-dom';
import Header from './WeatherApp/common/Header';
import Routesss from './Routes';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Routesss/>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('react-app'));