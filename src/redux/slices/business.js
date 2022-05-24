import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  financial: 0,
  reputation: 0,
  compliance: 0,
  privacy: 0,
};

const slice = createSlice({
  name: "business",
  initialState,
  reducers: {
    // SET DISCOVERY
    setFinancial(state, action) {
      state.financial = action.payload;
    },
    // SET NAME
    setReputation(state, action) {
      state.reputation = action.payload;
    },
    // SET URL
    setCompliance(state, action) {
      state.compliance = action.payload;
    },
    // SET OPERATOR
    setPrivacy(state, action) {
      state.privacy = action.payload;
    },
  },
});

export default slice;
export const { actions, reducer } = slice;
