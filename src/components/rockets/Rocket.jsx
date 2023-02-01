import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Rocket.module.scss';
import { reserveRocket } from '../../features/rockets/rockets.slice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
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
          className={
            rocket.reserved
              ? styles['rocket__button--cancel']
              : styles.rocket__button
          }
          onClick={() => handleReserveRocket(rocket.id)}
        >
          {rocket.reserved ? 'Cancel reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.defaultProps = {
  rocket: null,
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_image: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }),
};

export default Rocket;
