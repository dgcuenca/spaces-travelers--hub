import React from 'react';
import PropTypes from 'prop-types';
import Rocket from './Rocket';
import styles from './RocketList.module.scss';

const RocketList = ({ rockets }) => (
  <div className={styles.rocketList}>
    {rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        rocket={rocket}
      />
    ))}
  </div>
);

RocketList.defaultProps = {
  rockets: [],
};

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default RocketList;
