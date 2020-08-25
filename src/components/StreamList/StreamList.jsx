import React, { useEffect, useState } from 'react';
import Streamer from './Streamer';
import { useParams } from 'react-router-dom';
import { fetchStreamers } from '../../services/apiFetches';

const StreamerList = () => {
  const [streams, setStreams] = useState([]);

  const { title } = useParams();

  useEffect(() => {
    fetchStreamers(title)
      .then(res => setStreams(res));
  }, []);

  const streamerDetails = streams.map(streamer => (
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

export default StreamerList;
