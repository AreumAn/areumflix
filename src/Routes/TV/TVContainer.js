import React, { useState, useEffect } from 'react';
import { TVApi } from '../../api';
import TVPresenter from './TVPresenter';

const TVContainer = () => {
  const [tvList, setTvList] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const sectionArr = ['topRated', 'popular', 'airingToday'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: topRated },
        } = await TVApi.topRated();
        const {
          data: { results: popular },
        } = await TVApi.popular();
        const {
          data: { results: airingToday },
        } = await TVApi.airingToday();
        setTvList({
          topRated: topRated,
          popular: popular,
          airingToday: airingToday,
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <TVPresenter
      sectionArr={sectionArr}
      tvList={tvList}
      error={error}
      loading={loading}
    />
  );
};

export default TVContainer;
