import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from '../features/rockets/rockets.slice';
import missionReducer from '../features/missions/missions.slice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
