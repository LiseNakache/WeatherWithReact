import React from 'react';
import ReactDom from 'react-dom';
import Header from './WeatherApp/common/Header';
import Routesss from './Routes';
import {BrowserRouter} from 'react-router-dom';

import TodoList from './TodoList';
import TodoStore from './TodoStore';

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
  <App/>, document.getElementById('react-app'));