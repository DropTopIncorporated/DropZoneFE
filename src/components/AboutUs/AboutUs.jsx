import React from 'react';
import styles from './AboutUs.css';
import linkedIn from '../../photos/linkedin.png';
import Github from '../../photos/github.png';

const AboutUs = () => {
  return (
    <div className={styles.pageGrid}>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} />
          <h2>Dan Bennington</h2>
          <div>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img src={Github} />
            </a>
          </div>
          <p>Description of why chose project and if you could stream one thing what it would be?</p>
        </div>
      </section>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} />
          <h2>Lucia Brammer</h2>
          <div>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img src={Github} />
            </a>
          </div>
          <p>Description of why chose project and if you could stream one thing what it would be?</p>
        </div>
      </section>
      <section >
        
        <div className={styles.profileArea}>
          <img className={styles.profileImage}/>
          <h2>Erik Ford</h2>
          <div>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img src={Github} />
            </a>
          </div>
          <p>Description of why chose project and if you could stream one thing what it would be?</p>
        </div>
        
      </section>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} />
          <h2>Max Lamb</h2>
          <div>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img src={Github} />
            </a>
          </div>
          <p>Description of why chose project and if you could stream one thing what it would be?</p>
        </div>
      </section>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} />
          <h2>Jake Pendergraft</h2>
          <div>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img src={Github} />
            </a>
          </div>
          <p>Description of why chose project and if you could stream one thing what it would be?</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
