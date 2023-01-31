import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  getRocketsError,
  getRocketsStatus,
} from '../features/rockets/rockets.slice';
import styles from './Rockets.module.scss';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);
  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  let contentToDisplay = '';
  if (rocketStatus === 'loading') {
    contentToDisplay = <div className={styles.rockets__status}>Loading...</div>;
  } else if (rocketStatus === 'succeeded') {
    contentToDisplay = <div className={styles.rockets__status}>Successes</div>;
  } else if (rocketStatus === 'failed') {
    contentToDisplay = (
      <em className={styles['rockets__status--failed']}>{error}</em>
    );
  }

  return <section className={styles.rockets}>{contentToDisplay}</section>;
};

export default Rockets;
