import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../View/Login';
import Dashboard from '../View/Dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/:username" component={Dashboard} />
            <Redirect from="/" to="/login" />
        </Switch>
    </BrowserRouter>
)

export default Routes;