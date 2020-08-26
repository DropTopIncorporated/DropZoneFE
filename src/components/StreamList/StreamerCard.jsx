import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './StreamerCard.css';

export default function StreamerCard({ streamTitle, streamerName, viewerCount, image }) {
  return (
  <div className={styles.card} >
    <Card onClick={() => window.open(`https://twitch.tv/${streamerName}`)}>
        <CardMedia
          component="img"
          alt={streamerName}
          image={image}
          className={styles.channelImage}
        />
      </Card>
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
