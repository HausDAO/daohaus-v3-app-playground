import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FourOhFour from '../pages/404';
import Dao from '../pages/Dao';
import Hub from '../pages/Hub';

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path='/dao/:dao(\b0x[0-9a-f]{10,40}\b)'>
        <Redirect to='/' />
      </Route>
      <Route exact path='/dao/:dao(\b0x[0-9a-f]{10,40}\b)/*'>
        <Redirect to='/' />
      </Route>
      <Route exact path='/'>
        <Hub />
      </Route>
      <Route
        path='/dao/:daochain/:daoid'
        render={routeProps => {
          return <Dao key={routeProps.match.params.daoid} {...routeProps} />;
        }}
      />
      <Route path='*' component={FourOhFour} />
    </Switch>
  );
};

export default BaseRouter;
