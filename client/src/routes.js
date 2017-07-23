import React from 'react';
import WeatherApp from './WeatherApp';
import About from './WeatherApp/common/About';
import Page404 from './WeatherApp/common/404';
import {Switch, Route, Redirect} from 'react-router-dom';

const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={WeatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;
