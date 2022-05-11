import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FourOhFour from '../pages/404';
import Dao from '../pages/Dao';
import Hub from '../pages/Hub';

const BaseRouter = () => {
  return (
    <Switch>
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
