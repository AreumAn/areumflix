import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Movie from '../Routes/Movie';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Detail from '../Routes/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/Detail" exact component={Detail} />
      </>
    </BrowserRouter>
  );
};

export default Router;
