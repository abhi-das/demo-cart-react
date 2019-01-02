import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import NotFound from './components/Notfound/Notfound';

const appRouting = (
    <Router>
        
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={ App } />
            <Route path={process.env.PUBLIC_URL + "/men"} component={ App }/>
            <Route path={process.env.PUBLIC_URL + "/women"} component={ App } />
            <Route path={process.env.PUBLIC_URL + "/kids"} component={ App } />
            <Route component={ NotFound } />
        </Switch>
        
    </Router>
);

ReactDOM.render(appRouting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
