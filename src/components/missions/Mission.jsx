import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mission.module.scss';

const Mission = ({ missions }) => (
  missions.map((mission) => (
    <li key={mission.mission_id} className={styles.mission}>
      <p className={styles.name}>{mission.mission_name}</p>
      <p className={styles.description}>{mission.description}</p>
      <div className={styles.status}>
        <button
          type="button"
        >
          NOT A MEMBER
        </button>
      </div>
      <div className={styles.empty}>
        <button
          type="button"
        >
          Join Mission
        </button>
      </div>
    </li>
  ))
);

Mission.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Mission;
