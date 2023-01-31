import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/FETCH_ROCKETS',
  async () => {
    const response = await axios.get(ROCKET_URL);
    const rockets = response.data;
    const modifiedRockets = rockets.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      description: rocket.description,
      flickr_image: rocket.flickr_images[0],
    }));
    return modifiedRockets;
  },
);