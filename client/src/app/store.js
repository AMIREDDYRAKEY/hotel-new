import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../redux/room/roomSlice';

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
  },
});