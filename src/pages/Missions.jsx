import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../features/missions/missions.slice';

const Missions = () => {
  const dispatch = useDispatch();
  const missionLoading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);
  useEffect(() => {
    if (missionLoading === 'idle') {
      dispatch(fetchMissions());
    }
  }, []);

  let tobeDisplay = '';
  if (missionLoading === 'loading') {
    tobeDisplay = <div>Loading</div>;
  } else if (missionLoading === 'succeeded') {
    tobeDisplay = <div>Successes</div>;
  } else if (missionLoading === 'failed') {
    tobeDisplay = <em>{error}</em>;
  }
  return tobeDisplay;
};

export default Missions;
