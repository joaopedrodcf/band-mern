import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './Home';
import Home from './Home';
import Band from './Home';
import Shows from './Home';
import Releases from './Home';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/band" component={Band} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/releases" component={Releases} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
);

export default Main;
