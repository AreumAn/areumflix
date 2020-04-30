import React, { useEffect } from 'react';
import { movieApi } from './api';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { result: upcomingMovies },
        } = await movieApi.nowPlaying();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return <div>TEST</div>;
};

export default App;
