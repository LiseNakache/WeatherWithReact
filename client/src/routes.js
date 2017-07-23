import React from 'react';
import App from './WeatherApp/App';
import About from './weatherApp/common/About';
import Page404 from './weatherApp/common/404';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={App} />
            <Route name="about" exact path='/about' component={About} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;
