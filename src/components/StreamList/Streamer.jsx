import React from 'react';
import PropTypes from 'prop-types';

const Streamer = ({ streamTitle, streamerName, viewerCount }) => (
  <div>
    Title: {streamTitle},
    Name: {streamerName},
    Viewers: {viewerCount}
  </div>
);

Streamer.propTypes = {
  streamTitle: PropTypes.string.isRequired,
  streamerName: PropTypes.string.isRequired,
  viewerCount: PropTypes.number.isRequired
};

export default Streamer;
