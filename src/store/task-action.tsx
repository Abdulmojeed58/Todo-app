import { ITaskDetails } from "../interfaces/taskInterface";
import { taskActions } from "./taskSlice";

export const getData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (!res.ok) {
        throw new Error("An error occured");
      }
      const data = await res.json();
      return data;
    };
    try {
      const taskData = await fetchData();
      const newTaskData = taskData.map((task: any) => ({
        title: task.title,
        startTime: "00",
        endTime: "00",
        id: `${task.id}`,
        completed: task.completed,
      }));
    //   console.log(newTaskData);
      dispatch(taskActions.replaceTask(newTaskData));
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendData = (task: ITaskDetails) => {
  const { title, id, completed } = task;
  return async (dispatch: any) => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          id,
          title,
          completed,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!res.ok) {
        throw new Error("An error occured");
      }
      const data = await res.json();
      console.log('status', res.status)
      return data;
    };
    try {
      const taskData = await fetchData();
      console.log(taskData);
      console.log("sent success");
    } catch (err) {
      console.log(err);
    }
  };
};
