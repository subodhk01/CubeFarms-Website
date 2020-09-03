import React from 'react';
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/font.css"
import "./css/style.css"
import 'aos/dist/aos.css';

import Homepage from './pages/Homepage'
import JoinUs from './pages/JoinUs'
import Outsource from './pages/Outsource'
import Advertising from './pages/Advertising'
import Creative from './pages/Creative'

function App() {
    return (
        <Switch>
            <Route path="/joinus" component={JoinUs} />
            <Route path="/web" component={Outsource} />
            <Route path="/advertising" component={Advertising} />
            <Route path="/creative" component={Creative} />
            <Route path="/" component={Homepage} />
        </Switch>
    );
}

export default App;