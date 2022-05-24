import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confidentality: 0,
  integrity: 0,
  availability: 0,
  accountability: 0,
};

const slice = createSlice({
  name: "technical",
  initialState,
  reducers: {
    // SET DISCOVERY
    setConfidentality(state, action) {
      state.confidentality = action.payload;
    },
    // SET NAME
    setIntegrity(state, action) {
      state.integrity = action.payload;
    },
    // SET URL
    setAvailability(state, action) {
      state.availability = action.payload;
    },
    // SET OPERATOR
    setAccountability(state, action) {
      state.accountability = action.payload;
    },
  },
});

export default slice;
export const { actions, reducer } = slice;
