import React from 'react';
import styles from './AboutUs.css';
import linkedIn from '../../photos/linkedin.png';
import Github from '../../photos/github.png';
import placeholder from '../../photos/placeholder.png'
const AboutUs = () => {
  return (
    <div className={styles.pageGrid}>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src={placeholder}/>
          <h2 className={styles.name}>Dan Bennington</h2>
          <p className={styles.textArea}>Description of why chose project and if you could stream one thing what it would be?</p>
          <div>
            <a href="https://www.linkedin.com/in/dan-bennington/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/dbennin125">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
      </section>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src={placeholder}/>
          <h2 className={styles.name}>Lucia Brammer</h2>
          <p className={styles.textArea}>Description of why chose project and if you could stream one thing what it would be?</p>
          <div>
            <a href="https://www.linkedin.com/in/luciabrammer/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
      </section>
      <section >
        
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src={placeholder}/>
          <h2 className={styles.name}>Erik Ford</h2>
          <p className={styles.textArea}>Description of why chose project and if you could stream one thing what it would be?</p>
          <div>
            <a href="https://www.linkedin.com/in/erik-ford-business/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/Morriden">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
        
      </section>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src={placeholder}/>
          <h2 className={styles.name}>Max Lamb</h2>
          <p className={styles.textArea}>Description of why chose project and if you could stream one thing what it would be?</p>
          <div>
            <a href="https://www.linkedin.com/in/max-lamb/">
              <img className={styles.linkImage} src={linkedIn} />
            </a>
            <a href="https://github.com/MaximusLamb">
              <img className={styles.linkImage} src={Github} />
            </a>
          </div>
        </div>
      </section>
      <section >
        <div className={styles.profileArea}>
          <img className={styles.profileImage} src={placeholder}/>
          <h2 className={styles.name}>Jake Pendergraft</h2>
          <p className={styles.textArea}>Description of why chose project and if you could stream one thing what it would be?</p>
          <div>
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
