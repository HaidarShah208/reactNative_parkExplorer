import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {
    data: { data: [], total: 0 },
  },
  parkDetails: null,
  loading: false,
  error: null,
};

export const fetchParks = createAsyncThunk(
  "parks/fetchParks",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/parks",
        params: params,
        headers: {
          "X-Api-Key": "i4Bjpl4PNakU84clYv7fMZvcDCtLtmZVqy1BNIG2",
        },
      };

      const response = await axios.request(options);

      return { data: response.data, params };
    } catch (error) {
      throw error;
    }
  }
);

const parksSlice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    clearParksData: (state) => {
      state.data = {
        data: { data: [], total: 0 },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParks.fulfilled, (state, action) => {
        state.loading = false;
        state.data.data.data = [
          ...state.data.data.data,
          ...action.payload.data.data,
        ];
        state.data.data.total = action.payload.data.total;
      })
      .addCase(fetchParks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearParksData } = parksSlice.actions;
export default parksSlice.reducer;
