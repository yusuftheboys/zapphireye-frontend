import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  url: "",
  operator: "",
  period: "Monthly",
  description: "",
};

const slice = createSlice({
  name: "url",
  initialState,
  reducers: {
    // SET ID
    setId(state, action) {
      state.id = action.payload;
    },
    // SET NAME
    setName(state, action) {
      state.name = action.payload;
    },
    // SET URL
    setUrl(state, action) {
      state.url = action.payload;
    },
    // SET OPERATOR
    setOperator(state, action) {
      state.operator = action.payload;
    },
    // SET PERIOD
    setPeriod(state, action) {
      state.period = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export default slice;
export const { actions, reducer } = slice;
