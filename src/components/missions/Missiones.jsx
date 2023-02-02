import React from 'react';
import PropTypes from 'prop-types';
import Mission from './Mission';
import styles from './Missiones.module.scss';

const Missiones = ({ missions }) => (
  <>
    <header>
      <ul className={styles.header}>
        <li className={styles.mission} key="1">Mission</li>
        <li className={styles.description} key="2">Descrition</li>
        <li className={styles.status} key="3">Status</li>
        <li className={styles.empty} key="4" />
      </ul>
    </header>
    <div className={styles.missionsContainer}>
      <ul>
        <Mission missions={missions} />
      </ul>
    </div>
  </>
);

Missiones.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Missiones;
