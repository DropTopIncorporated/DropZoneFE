import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStreamers } from '../../services/apiFetches';
import StreamerCard from './StreamerCard';
import styles from './StreamerList.css'

const StreamerList = () => {
  const [streams, setStreams] = useState([]);

  const { title } = useParams();

  useEffect(() => {
    fetchStreamers(title)
      .then(res => setStreams(res));
  }, []);

  const streamerDetails = streams.map(streamer => (
    <li key={streamer.name} className={styles.streamerCard}>
      <StreamerCard {...streamer} />
    </li>
  ));

  return (
    <div className={styles.streamerContainer}>
    <ul className={styles.streamerList}>
      {streamerDetails}
    </ul>
    </div>
  );
};

export default StreamerList;
