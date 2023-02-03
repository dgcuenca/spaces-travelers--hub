import React from 'react';
import { useSelector } from 'react-redux';
import { reservedRockets } from '../features/rockets/rockets.slice';
import { getJoinedMissions } from '../features/missions/missions.slice';
import styles from './Profile.module.scss';

const Profile = () => {
  const rockets = useSelector(reservedRockets);
  const missions = useSelector(getJoinedMissions);
  return (
    <div className={styles.profile}>
      <div className={styles.profile__wrapper}>
        <h2 className={styles.profile__title}>My Missions</h2>
        <ul className={styles.profile__items}>
          {missions ? (
            missions.map((mission) => (
              <li
                className={styles.profile__item}
                key={mission.mission_id}
              >
                {mission.mission_name}
              </li>
            ))
          ) : (
            <li className={styles['profile__item--none']}>
              Sorry, currently no reserve mission to show...
            </li>
          )}
        </ul>
      </div>
      <div className={styles.profile__wrapper}>
        <h2 className={styles.profile__title}>My Rockets</h2>
        <ul className={styles.profile__items}>
          {rockets.length > 0 ? (
            rockets.map((rocket) => (
              <li
                className={styles.profile__item}
                key={rocket.id}
              >
                {rocket.name}
              </li>
            ))
          ) : (
            <li className={styles['profile__item--none']}>
              Sorry, currently no reserve rocket to show...
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
