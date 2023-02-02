import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.profile__wrapper}>
      <h2 className={styles.profile__title}>My Missions</h2>
      <ul className={styles.profile__items}>
        <li className={styles.profile__item}>Falcon9</li>
        <li className={styles.profile__item}>Falcon Heavy</li>
        <li className={styles.profile__item}>Starship</li>
      </ul>
    </div>
    <div className={styles.profile__wrapper}>
      <h2 className={styles.profile__title}>My Rockets</h2>
      <ul className={styles.profile__items}>
        <li className={styles.profile__item}>Falcon9</li>
        <li className={styles.profile__item}>Falcon Heavy</li>
        <li className={styles.profile__item}>Starship</li>
      </ul>
    </div>
  </div>
);

export default Profile;
