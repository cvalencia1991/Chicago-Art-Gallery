import { configureStore } from '@reduxjs/toolkit';
import ChicagoGallery from './ArtGallery/ArtGallery';

const store = configureStore({
  reducer: {
    gallery: ChicagoGallery,
  },
});

export default store;
