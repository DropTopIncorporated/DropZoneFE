import React from 'react';
import styles from './AboutUs.css';
import linkedIn from '../../photos/linkedin.png';
import Github from '../../photos/github.png';
import placeholder from '../../photos/placeholder.png';
const AboutUs = () => {
  return (
    <div className={styles.pageGrid}>
      <section className={styles.cardContainer}>
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src="/dan.jpg"/>
          <h2 className={styles.name}>Dan Bennington</h2>
          <p className={styles.textArea}>Dan enjoys motorcycles, going on hikes, watching and playing basketball (go Blazers and Lakers!), lifting heavy objects at the gym and developing software. When not working on new code and enjoying the Portland area, Dan can be seen at the beach or taking his motorcycle to the rest of Oregon.</p>
          <div className={styles.linkImageContainer}>
            <a href="https://www.linkedin.com/in/dan-bennington/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/dbennin125">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
      </section>
      <section section className={styles.cardContainer}>
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src="/2E5A5DCD-9C04-4C6C-8C61-D1CF7046836F_1_201_a.jpeg"/>
          <h2 className={styles.name}>Lucia Brammer</h2>
          <p className={styles.textArea}>Lucia is a full-stack engineer with a passion for finding creative solutions to complex problems. She chose this project because it looks to provide a resource that many would benefit from. If she could stream anything it would be a podcast she’s been working on for a couple months about having a quarter life crisis.</p>
          <div className={styles.linkImageContainer}>
            <a href="https://www.linkedin.com/in/luciabrammer/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/brammerl">
              <img className={styles.linkImage} src={Github} />
            </a>
            <a href="https://lucia-brammer.com">
              <img className={styles.linkImage} src='/websitelogo.png' />
            </a>
          </div>
        </div>
      </section>
      <section section className={styles.cardContainer}>     
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src="/0.jpg"/>
          <h2 className={styles.name}>Erik Ford</h2>
          <p className={styles.textArea}>Erik is a Full-Stack software engineer who enjoys playing board games, video games, and spending times outdoors LARPing. I came up with this project idea when I noticed there was a gap in being notified which games had drops available. If I could stream one thing, it would be my LARPing experiences.</p>
          <div className={styles.linkImageContainer}>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
        
      </section>
      <section section className={styles.cardContainer}>
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src="/BBDE9A32-2FE6-442C-8656-BBB09CB9CAEE_1_105_c.jpeg"/>
          <h2 className={styles.name}>Max Lamb</h2>
          <p className={styles.textArea}>Max is a Full-Stack software engineer originally from Montana who enjoys going outside, meeting new people, and ultimately just trying to find new fun experiences. The only streamer I watched on twitch was the "two-time" and he has recently switched to Youtube so that is where I witness his momentum now.</p>
          <div className={styles.linkImageContainer}>
            <a href="https://www.linkedin.com/in/max-lamb/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/MaximusLamb">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
      </section>
      <section section className={styles.cardContainer}>
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src="/headshot.jpg"/>
          <h2 className={styles.name}>Jake Pendergraft</h2>
          <p className={styles.textArea}>Jake enjoys video games, spending time outdoors, 
playing sports, software development, and reading
 large fantasy novels. When not engineering software,
 he can often be found out in the woods playing disc 
 golf, or walking his black lab Leo. If I had to stream one thing,
 it would be my dog Leo playing at the park.</p>
          <div className={styles.linkImageContainer}>
            <a href="https://www.linkedin.com/in/jake-pendergraft/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/Jpendy">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
