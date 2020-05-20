import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../../Components/Loading';
import Message from '../../Components/Message';

const StyledDetailPresenter = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const StyledCover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const StyledData = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const StyledTitle = styled.h3`
  font-size: 32px;
`;

const StyledItemContainer = styled.div`
  margin: 20px 0;
`;

const StyledItem = styled.span``;

const StyledDivider = styled.span`
  margin: 0 10px;
`;

const StyledOverview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ showDetail, loading, error }) => {
  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledDetailPresenter>
      <StyledBackdrop
        bgImage={`https://image.tmdb.org/t/p/original${showDetail.backdrop_path}`}
      />
      <StyledContent>
        <StyledCover
          bgImage={
            showDetail.poster_path
              ? `https://image.tmdb.org/t/p/original${showDetail.poster_path}`
              : // eslint-disable-next-line no-undef
                require('../../assets/noPosterSmall.png')
          }
        />
        <StyledData>
          <StyledTitle>
            {showDetail.original_title
              ? showDetail.original_title
              : showDetail.original_name}
          </StyledTitle>
          <StyledItemContainer>
            <StyledItem>
              {showDetail.release_date
                ? showDetail.release_date.substring(0, 4)
                : showDetail.first_air_date.substring(0, 4)}
            </StyledItem>
            <StyledDivider>•</StyledDivider>
            <StyledItem>
              {showDetail.runtime
                ? showDetail.runtime
                : showDetail.episode_run_time[0]}{' '}
              min
            </StyledItem>
            <StyledDivider>•</StyledDivider>
            <StyledItem>
              {showDetail.genres &&
                showDetail.genres.map((genre, index) =>
                  index === showDetail.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `,
                )}
            </StyledItem>
          </StyledItemContainer>
          <StyledOverview>{showDetail.overview}</StyledOverview>
        </StyledData>
      </StyledContent>
    </StyledDetailPresenter>
  );
};

DetailPresenter.propTypes = {
  showDetail: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
