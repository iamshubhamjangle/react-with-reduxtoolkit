import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIcecreme: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreme--;
    },
    restocked: (state, action) => {
      state.numOfIcecreme += action.payload;
    },
  },
  extraReducers: (builder) => {
    // get the actions of another slice and perform task on icecremeSlice state
    // builder.addCase(cakeOrdered, (state) => {
    //   state.numOfIcecreme--;
    // });
  },
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIcecreme--
  //   }
  // }
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
