import { createAsyncThunk } from '@reduxjs/toolkit';

// const
const GET_GALLERY = 'GET_GALLERY';

// reducer
export default function ChicagoGallery(state = [], action) {
  switch (action.type) {
    case `${GET_GALLERY}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}

// actions
export const getinfoart = createAsyncThunk(GET_GALLERY, async () => {
  const url = 'https://api.artic.edu/api/v1/artworks?page=2&limit=100';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result.data;
});
