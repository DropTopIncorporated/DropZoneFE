import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './StreamerCard.css';

export default function StreamerCard({ streamTitle, streamerName, viewerCount, image }) {
  return (
  <div className={styles.card} >
        <CardMedia
          component="img"
          alt={streamerName}
          image={image}
          className={styles.channelImage}
          onClick={() => window.open(`https://twitch.tv/${streamerName}`)}
        />
        <CardContent className={styles.caption}>
          <p className={styles.streamerTitle}>
            {streamerName}
          </p>
          <div className={styles.subtitle}>
          <p className={styles.title}>
            {streamTitle},
        </p>
        <p className={styles.viewers}>
            Viewers: {viewerCount}
          </p>
          </div>
        </CardContent>
    </div>
  );
}
