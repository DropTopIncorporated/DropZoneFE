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
          <h3 className={styles.streamerTitle}>
            {streamTitle},
          </h3>
          <p>
            Name: {streamerName},
          </p>
          <p>
            Viewers: {viewerCount}
          </p>
        </CardContent>
    </div>
  );
}
