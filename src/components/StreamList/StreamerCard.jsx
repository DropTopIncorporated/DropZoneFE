import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './StreamerCard.css'

export default function StreamerCard({ streamTitle, streamerName, viewerCount, image }) {
  return (
    <Card className={styles.card} onClick={() => window.open(`https://twitch.tv/${streamerName}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={streamerName}
          image={image}
          className={styles.channelImage}
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
      </CardActionArea>
    </Card>
  );
}