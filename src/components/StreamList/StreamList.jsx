import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStreamers } from '../../services/apiFetches';
import StreamerCard from './StreamerCard';
import styles from './StreamerList.css';
import SearchBar from '../Search/SearchBar';

const StreamerList = () => {
  const [streams, setStreams] = useState([]);
  const [searchStreamer, setSearchStreamer] = useState('');
  const { title } = useParams();

  useEffect(() => {
    fetchStreamers(title, searchStreamer)
      .then(res => res.sort((a, b) => b.viewerCount - a.viewerCount))
      .then(setStreams);
  }, [searchStreamer]);

  const handleChange = ({ target }) => setSearchStreamer(target.value);

  const streamerDetails = streams.map(streamer => (
    <li key={streamer.name} className={styles.streamerCard}>
      <StreamerCard {...streamer} />
    </li>
  ));

  return (
    <div className={styles.streamerContainer}>
      <SearchBar
        onChange={handleChange}
      />
      <ul className={styles.streamerList}>
        {streamerDetails}
      </ul>
    </div>
  );
};

export default StreamerList;
