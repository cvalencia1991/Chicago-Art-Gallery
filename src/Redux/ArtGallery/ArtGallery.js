/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';

// Consts
const GET_GALLERY = 'GET_GALLERY';
const SEARCH_ART = 'SEARCH_ART';

// Reducer
export default function ChicagoGallery(state = [], action) {
  switch (action.type) {
    case `${GET_GALLERY}/fulfilled`:
      return action.payload;
    case SEARCH_ART:
      return state.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
    default:
      return state;
  }
}

// Actions
export const getinfoart = createAsyncThunk(GET_GALLERY, async () => {
  const url = 'https://api.artic.edu/api/v1/artworks?page=6&limit=50';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result.data;
});

export function SearchArt(obj) {
  return { type: SEARCH_ART, payload: obj };
}
