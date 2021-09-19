import React, { Suspense, lazy} from "react";
import { BrowserRouter as Router, Switch } from 'react-route-dom';

const Routes = () => (
    <Router>
        <Suspense fallback={<div></div>}>
        <Switch>

        <Route path="/login" component=(Login)/>

        </Switch>


        </Suspense>

    </Router>


)