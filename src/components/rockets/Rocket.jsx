import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rocket.module.scss';

const Rocket = ({ rocket }) => (
  <div className={styles.rocket}>
    <div className={styles.rocket__left}>
      <img
        className={styles.rocket__img}
        src={rocket.flickr_image}
        alt={rocket.name}
      />
    </div>
    <div className={styles.rocket__right}>
      <h2 className={styles.rocket__title}>{rocket.name}</h2>
      <p className={styles.rocket__description}>{rocket.description}</p>
      <button
        type="button"
        className={styles.rocket__button}
      >
        Reserve Rocket
      </button>
    </div>
  </div>
);

Rocket.defaultProps = {
  rocket: null,
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_image: PropTypes.string.isRequired,
  }),
};

export default Rocket;
