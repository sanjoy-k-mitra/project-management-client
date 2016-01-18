/**
 * Created by sanjoy on 1/18/16.
 */
import React from 'react';
import {Route} from 'react-router';

import App from './components/App';
import {Dashboard} from './components/Dashboard';
import {Auth} from './components/Auth';

const routes = <Route component={App}>
    <Route path="login" component={Auth}/>
    <Route path="*" component={Dashboard} />
</Route>;


export default routes;