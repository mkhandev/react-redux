import { createSlice } from "@reduxjs/toolkit";
import initialData from "../../data";

const counterSlice = createSlice({
  name: "counters",
  initialState: initialData,
  reducers: {
    increment(state, action) {
      const counterIndex = state.findIndex((c) => c.id == action.payload);
      state[counterIndex].value++;
    },
    decrement(state, action) {
      const counterIndex = state.findIndex((c) => c.id == action.payload);
      state[counterIndex].value--;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
