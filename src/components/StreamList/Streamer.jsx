import React from 'react';

// eslint-disable-next-line react/prop-types
const Streamer = ({ streamTitle, streamerName, viewerCount, image }) => (
  <section>
    <a href={`https://www.twitch.tv/${streamerName}`}>
      <img src={image} alt='game image'/>
    </a>
    <h3>
      {streamTitle},
    </h3>
    <p>
    Name: {streamerName},
    </p>
    <p>
    Viewers: {viewerCount}
    </p>
  </section>
);

export default Streamer;
