import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../features/missions/missions.slice';
import Missiones from '../components/missions/Missiones';

const Missions = () => {
  const dispatch = useDispatch();
  const missionLoading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);
  const missions = useSelector((state) => state.missions.missions);
  useEffect(() => {
    if (missionLoading === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionLoading]);

  let tobeDisplay = '';
  if (missionLoading === 'loading') {
    tobeDisplay = <div>Loading</div>;
  } else if (missionLoading === 'succeeded') {
    tobeDisplay = (
      <section><Missiones missions={missions} /></section>
    );
  } else if (missionLoading === 'failed') {
    tobeDisplay = <em>{error}</em>;
  }
  return tobeDisplay;
};

export default Missions;
