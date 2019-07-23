import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Not_found from "./not_found";
import main_page from "./main_page";
import add_form_data from "./add_form_data";

ReactDOM.render(<Router>
    <div>
        <Switch>
            <Route path="/add_form_data" exact component={add_form_data}/>
            <Route path="/" exact component={main_page}/>
            <Route component={Not_found}/>
        </Switch>
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
