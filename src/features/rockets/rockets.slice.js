import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/FETCH_ROCKETS',
  async () => {
    const response = await axios.get(ROCKET_URL);
    const rockets = response.data;
    const modifiedRockets = rockets.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      type: rocket.name,
      description: rocket.description,
      flickr_image: rocket.flickr_images[0],
    }));
    return modifiedRockets;
  },
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        if (rocket.reserved) {
          return {
            id: rocket.id,
            name: rocket.name,
            type: rocket.name,
            description: rocket.description,
            flickr_image: rocket.flickr_image,
          };
        }
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets };
    },
    // cancelReservation: (state, action) => {
    //   const rockets = state.rockets.map((rocket) => {
    //     if (rocket.id === action.payload) {
    //       return {
    //         id: rocket.id,
    //         name: rocket.name,
    //         type: rocket.name,
    //         description: rocket.description,
    //         flickr_image: rocket.flickr_image,
    //       };
    //     }
    //     return { ...rocket, reserved: true };
    //   });
    //   return { ...state, rockets };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const newState = { ...state, status: 'loading' };
        return newState;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const newState = {
          ...state,
          status: 'succeeded',
          rockets: action.payload,
        };
        return newState;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        const newState = {
          ...state,
          status: 'failed',
          error: action.error.message,
        };
        return newState;
      });
  },
});

export const getAllRockets = (state) => state.rockets.rockets;
export const getRocketsStatus = (state) => state.rockets.status;
export const getRocketsError = (state) => state.rockets.error;
export const reservedRockets = (state) => {
  const filteredRockets = state.rockets.rockets.filter(
    (rocket) => rocket.reserved === true,
  );
  const reduceRockets = filteredRockets.map((rocket) => {
    const { id, name } = rocket;
    const modifiedRocket = {
      id,
      name,
    };
    return modifiedRocket;
  });
  return reduceRockets;
};

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
