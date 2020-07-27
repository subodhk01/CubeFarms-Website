import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import JoinUs from './pages/JoinUs'

function App() {
    return (
        <Switch>
            <Route exact path="/" component={JoinUs} />
        </Switch>
    );
}

export default App;