import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skill: 0,
  motive: 0,
  opportunity: 0,
  population: 0,
};

const slice = createSlice({
  name: "threatAgent",
  initialState,
  reducers: {
    // SET DISCOVERY
    setSkill(state, action) {
      state.skill = action.payload;
    },
    // SET NAME
    setMotive(state, action) {
      state.motive = action.payload;
    },
    // SET URL
    setOpportunity(state, action) {
      state.opportunity = action.payload;
    },
    // SET OPERATOR
    setPopulation(state, action) {
      state.population = action.payload;
    },
  },
});

export default slice;
export const { actions, reducer } = slice;
