import React from 'react';
import PropTypes from 'prop-types';
import Streamer from './Streamer';

const StreamerList = ({ streamers }) => {
  const streamerDetails = streamers.map(streamer => (
    <li key={streamer.name}>
      <Streamer {...streamer}/>
    </li>
  ));

  return (
    <ul>
      {streamerDetails}
    </ul>
  );
};

StreamerList.propTypes = {
  streamers: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default StreamerList;
