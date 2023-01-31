import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';
// Actions
const FETCH_MISSIONS = 'missions/FETCH_MISSIONS';

// Action creators
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await axios.get(MISSIONS_URL);
  const missions = response.data;
  const modifiedMissions = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  return modifiedMissions;
});

// Reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      const newState = { ...state, loading: true };
    },
    [fetchMissions.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        missions: action.payload,
      };
    },
    [fetchMissions.rejected]: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
  },
});

export default missionsSlice.reducer;
