import { createSlice } from "@reduxjs/toolkit";
import { ITaskDetails } from "../interfaces/taskInterface";

interface ITaskState {
  taskItem: ITaskDetails;
  isViewTask: boolean;
}

const initialState: ITaskState = {
  taskItem: {
    title: "",
    startTime: "",
    endTime: "",
    date: {
      year: '',
      month: '',
      day: ''
    },
    id: "",
    completed: false,
  },
  isViewTask: false,
};

const taskViewSlice = createSlice({
  name: "taskView",
  initialState,
  reducers: {
    viewTask: (state, action) => {
      state.taskItem = {
        title: action.payload.title,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
        id: action.payload.id,
        date: action.payload.date,
        completed: action.payload.completed,
      };
    },
    handleViewTaskStatus: (state, action) => {
      state.isViewTask = action.payload;
    },
  },
});

export const taskViewActions = taskViewSlice.actions;

export default taskViewSlice.reducer;
