import React from 'react';
import ReactDom from 'react-dom';
import Header from './common/Header';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Routes/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(
  <App/>, document.getElementById('react-app'));