import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import { DUMMY_TASK } from "../components/dummy_task";
import { ITaskDetails } from "../interfaces/taskInterface";

interface ITaskState {
  items: ITaskDetails[];
  isEditTask: boolean;
  isNewTask: boolean;
  change: boolean;
  isModal: boolean;
}

const initialState: ITaskState = {
  items: DUMMY_TASK,
  isEditTask: false,
  isNewTask: false,
  change: false,
  isModal: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    replaceTask: (state, action) => {
      state.items = action.payload;
      
    },
    addTask: (state, action) => {
      state.change = true;
      state.isModal = true;
      if (state.isEditTask) {
        state.isEditTask = true;
        const item = action.payload.item;
        const existingTask = state.items.find((task) => task.id === item.id);

        if (existingTask) {
          existingTask.title = action.payload.title;
          existingTask.startTime = action.payload.startTime;
          existingTask.endTime = action.payload.endTime;
          existingTask.date = action.payload.date;
          existingTask.completed = false;
        }
      } else {
        state.isEditTask = false;
        state.items.unshift({
          title: action.payload.title,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          date: action.payload.date,
          id: nanoid(),
          completed: false,
        });
      }
    },

    changeCompletedStatus: (state, action) => {

      const itemId = action.payload.id;
      const task = state.items.find((task) => task.id === itemId);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      state.change = true;
      const id = action.payload;
      const newtasks = state.items.filter((item)=> item.id !== id)
      state.items = newtasks;
      state.isModal = false;
    },

    changeEditStatus: (state, action) => {
      state.isEditTask = action.payload;
    },

    changeTaskStatus: (state, action) => {
      state.isNewTask = action.payload;
    },

    changeModalStatus: (state, action) => {
      state.isModal = action.payload;
    }
  },
});



export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
