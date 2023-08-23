/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchArt = createAsyncThunk(
  'gallery/fetchArt',
  async () => {
    const response = await fetch('https://api.artic.edu/api/v1/artworks?page=6&limit=9&fields=id,title,image_id,artist_display');
    try {
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw new Error('Server Error');
    }
  },
);

export const ChicagoGallery = createSlice({
  name: 'gallery',
  initialState: {
    art: [],
    isloading: false,
    hasErrors: false,
  },
  reducers: {
    searchArt: (state, action) => {
      const newart = state.art.filter((art) => art.title.toLowerCase().includes(action.payload.toLowerCase()));
      state.art = newart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArt.pending, (state) => {
        state.isloading = true;
        state.hasErrors = false;
      })
      .addCase(fetchArt.fulfilled, (state, action) => {
        state.art = action.payload.data;
        state.isloading = false;
        state.hasErrors = false;
      })
      .addCase(fetchArt.rejected, (state) => {
        state.isloading = false;
        state.hasErrors = true;
      });
  },
});

export const { searchArt } = ChicagoGallery.actions;
export const selectArt = (state) => state.gallery.art;
export const galleryIsLoading = (state) => state.gallery.isloading;

export default ChicagoGallery.reducer;
