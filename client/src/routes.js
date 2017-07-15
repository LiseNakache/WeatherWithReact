import React from 'react';
import Page404 from './components/404';
import WeatherApp from './components/WeatherApp';
import About from './components/About';
import Custom from './components/Custom';
import {Switch, Route, Redirect} from 'react-router-dom'

const custom = () => (
    <Switch>
        <Route exact path='/custom' component={Custom}/>
        <Route path='/custom/:id' component={Custom}/>
    </Switch>
)
const Routesss = () => (
    <div className="container">
        <Switch>
            <Route name="home" exact path='/' component={WeatherApp} />
            <Route name="about-us" path='/about-us' component={About}/>
            <Route name="About" path='/About' component={About}/>
            <Route name="custom" path='/custom' component={custom}/>
            <Redirect from="/about-us" to="/page"/>
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routesss;