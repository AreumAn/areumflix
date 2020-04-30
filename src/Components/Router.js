import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Movie from '../Routes/Movie';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Detail from '../Routes/Detail';

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/movie" exact component={Movie} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Route path="/Detail" exact component={Detail} />
    </>
  </Router>
);
