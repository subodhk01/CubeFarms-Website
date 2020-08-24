import React from 'react';
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/font.css"
import "./css/style.css"
import 'aos/dist/aos.css';

import JoinUs from './pages/JoinUs'
import Outsource from './pages/Outsource'

function App() {
    return (
        <Switch>
            <Route exact path="/joinus" component={JoinUs} />
            <Route exact path="/outsource" component={Outsource} />
        </Switch>
    );
}

export default App;