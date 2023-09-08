import { createSlice } from "@reduxjs/toolkit";

interface ITaskState {
  taskItem: {
    title: string;
    startTime: string;
    endTime: string;
    id: string;
    completed: boolean;
  };
  isViewTask: boolean;
}

const initialState: ITaskState = {
  taskItem: {
    title: "",
    startTime: "",
    endTime: "",
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
