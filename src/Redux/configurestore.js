import { configureStore } from '@reduxjs/toolkit';
import chicagoReducer from './ArtGallery/ArtGallery';

export default configureStore({
  reducer: {
    gallery: chicagoReducer,
  },
});
