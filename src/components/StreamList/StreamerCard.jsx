import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './StreamerCard.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: '#6B6E70',
    color: '#474B4F',
    border: '3px solid green',
    borderRadius: '20px'
  },
});

export default function StreamerCard({ streamTitle, streamerName, viewerCount, image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => window.open(`https://twitch.tv/${streamerName}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={streamerName}
          image={image}
        />
        <CardContent>
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