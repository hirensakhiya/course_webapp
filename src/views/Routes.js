import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import { Switch } from 'react-router'

const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>

export default Routes
