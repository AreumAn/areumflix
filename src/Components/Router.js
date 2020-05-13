import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Routes/Home';
import Movie from '../Routes/Movie';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Detail from '../Routes/Detail';
import Header from './Header';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie" exact component={Movie} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" exact component={Search} />
          <Route path="/Detail" exact component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
