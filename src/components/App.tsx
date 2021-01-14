import React from 'react';
import 'styles/reset.scss';
import * as PAGES from 'page';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <PAGES.ControlMap />} />
        <Route exact path="/member" render={() => <PAGES.Member />} />
        <Route exact path="/login" render={() => <PAGES.AuthLogin />} />
        <Route exact path="/delivery" render={() => <PAGES.DeliveryStatus />} />
        <Route
          exact
          path="/manage"
          render={() => <PAGES.ManageDeliveryList />}
        />
      </Switch>
    </>
  );
}

export default App;
