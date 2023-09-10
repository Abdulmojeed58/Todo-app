import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import taskViewReducer from "./taskViewSlice";
import dateReducer from './date-slice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        taskView: taskViewReducer,
        date: dateReducer,
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch