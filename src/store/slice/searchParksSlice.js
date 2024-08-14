import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {
    data: {data: [], total: 0},
  },
  loading: false,
  error: null,
};

export const fetchSearchParks = createAsyncThunk(
  'parks/fetchSearchParks',
  async ({q, start = 0, limit = 10}, {getState}) => {
    try {
      const response = await axios.get(
        'https://developer.nps.gov/api/v1/parks',
        {
          params: {
            q,
            start,
            limit,
          },
          headers: {
            'X-Api-Key': 'i4Bjpl4PNakU84clYv7fMZvcDCtLtmZVqy1BNIG2',
          },
        },
      );

      return {data: response.data, start};
    } catch (error) {
      throw error;
    }
  },
);

const searchParksSlice = createSlice({
  name: 'searchParks',
  initialState,
  reducers: {
    clearParksData: state => {
      state.data = {
        data: {data: [], total: 0},
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchParks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchParks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.start === 0) {
          state.data.data.data = action.payload.data.data;
        } else {
          state.data.data.data = [
            ...state.data.data.data,
            ...action.payload.data.data,
          ];
        }
        state.data.data.total = action.payload.data.total;
      })
      .addCase(fetchSearchParks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {clearParksData} = searchParksSlice.actions;
export default searchParksSlice.reducer;
