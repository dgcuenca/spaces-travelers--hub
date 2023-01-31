import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/FETCH_MISSIONS',
  async () => {
    const response = await axios.get(MISSIONS_URL);
    const missions = response.data;
    const modifiedMissions = missions.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
    return modifiedMissions;
  },
);