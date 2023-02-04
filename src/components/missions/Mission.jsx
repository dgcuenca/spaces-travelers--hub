import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Mission.module.scss';
import { joinMission } from '../../features/missions/missions.slice';

const Mission = ({ missions }) => {
  const dispatch = useDispatch();
  const joinHandler = (id) => {
    dispatch(joinMission(id));
  };

  return (
    missions.map((mission) => (
      <li key={mission.mission_id} className={styles.mission}>
        <p className={styles.name}>{mission.mission_name}</p>
        <p className={styles.description}>{mission.description}</p>
        <div className={styles.status}>
          <button
            type="button"
            className={mission.reserved ? styles.active : styles.nomember}
          >
            {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
          </button>
        </div>
        <div className={styles.empty}>
          <button
            type="button"
            onClick={() => joinHandler(mission.mission_id)}
            className={mission.reserved ? styles.leave : styles.join}
          >
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      </li>
    ))
  );
};

Mission.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  })).isRequired,
};

export default Mission;
