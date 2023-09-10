import { createSlice } from "@reduxjs/toolkit";
import { IDate } from "../interfaces/taskInterface";

const initialState: IDate = {
  year: '',
  month: '',
  day: '1'
}

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.day = action.payload.day;
    },
  },
});

export const dateActions = dateSlice.actions;
export default dateSlice.reducer
