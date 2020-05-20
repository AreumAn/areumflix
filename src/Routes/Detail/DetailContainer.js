import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, TVApi } from '../../api';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const DetailContainer = (props) => {
  const [showDetail, setShowDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      location: { pathname },
      match: {
        params: { id },
      },
      history: { push },
    } = props;

    const parseID = parseInt(id);
    const isMovie = pathname.includes('/movie/');

    if (isNaN(parseID)) {
      return push('/');
    }

    const fetchData = async () => {
      try {
        if (isMovie) {
          const { data: result } = await movieApi.movieDetail(parseID);
          setShowDetail(result);
        } else {
          const { data: result } = await TVApi.showDetail(parseID);
          setShowDetail(result);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props, showDetail]);

  return (
    <DetailPresenter showDetail={showDetail} error={error} loading={loading} />
  );
};

DetailContainer.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
};

export default DetailContainer;
