import { useAppDispatch, useAppSelector } from "../hooks";
import { ITaskDetails } from "../interfaces/taskInterface";
import { taskActions } from "../store/taskSlice";
import { taskViewActions } from "../store/taskViewSlice";

import TaskItem from "./TaskItem";

const Tasks = () => {
  const tasksState = useAppSelector((state) => state.tasks.items);
  const dispatch = useAppDispatch();

  //    console.log(tasksState)

  const handleClick = (
    title: string,
    startTime: string,
    endTime: string,
    id: string
  ) => {
    dispatch(taskViewActions.handleViewTaskStatus(true));
    dispatch(
      taskViewActions.viewTask({
        title,
        startTime,
        endTime,
        id,
      })
    );
  };

  const handleChange = (task: ITaskDetails) => {
    dispatch(taskActions.changeCompletedStatus(task));
  };

  const allTask = tasksState.map((task, index) => (
    <TaskItem
      key={index}
      {...task}
      onClick={() =>
        handleClick(task.title, task.startTime, task.endTime, task.id)
      }
      inputProps={{ onChange: () => handleChange(task), onClick: (e) => e.stopPropagation(), checked: task.completed }}
    />
  ));
  return <div className="flex flex-col gap-[16px]">{allTask}</div>;
};

export default Tasks;
