import React, { useRef } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

import Close from "../assets/icons/Icon (4).svg";
import Bell from "../assets/icons/bell-01.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import CalendarIcon from "../assets/icons/Icon (1).svg";
import { useAppDispatch, useAppSelector } from "../hooks";
import { taskActions } from "../store/taskSlice";
import { FormCard } from "./Card";
import { taskViewActions } from "../store/taskViewSlice";

const TaskForm = () => {
  const inputRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const isEditTask = useAppSelector((state) => state.tasks.isEditTask);
  const item = useAppSelector((state) => state.taskView.taskItem);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    dispatch(
      taskActions.addTask({
        title: inputRef.current.value,
        startTime: "10:00am",
        endTime: "12:00pm",
        item
      })
    );
    handleClose();
  };

  const handleClose = () => {
    dispatch(taskActions.changeEditStatus(false));
    dispatch(taskActions.changeTaskStatus(false));
    dispatch(taskViewActions.handleViewTaskStatus(false));
    inputRef.current.value = "";
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-[18px]">
            {!isEditTask ? "Add Task" : "Edit Task"}
          </h2>
          <button onClick={handleClose} type="button">
            <LazyLoadImage src={Close} alt="close btn" />
          </button>
        </div>
        <textarea
          name="task"
          id="task"
          className="border-skin-gray-bg outline-none my-2 w-full border-[1px] rounded-[8px] bg-skin-bg-gray h-[140px] p-3"
          placeholder={`${isEditTask ? "Create wireframe" : ""}`}
          ref={inputRef}
        ></textarea>
        <div className="grid grid-cols-3 gap-1 lg:gap-3">
          <Button
            label={
              <>
                <LazyLoadImage src={CalendarIcon} alt="date" />
                <p>Today</p>
              </>
            }
            variant="outlined"
            type="button"
          />
          <Button
            label={
              <>
                <AiOutlineClockCircle />
                <p>00:00</p>
              </>
            }
            variant="outlined"
            type="button"
            customClassName="px-1"
          />
          {/* <Button
          label={
            <>
              <AiOutlineClockCircle />
              <p>00:00</p>
            </>
          }
          variant="outlined"
          type="button"
          customClassName='px-1'
        /> */}
          <input
            type="time"
            id="myTimeInput"
            name="myTime"
            min="09:00"
            max="18:00"
            step="900"
            defaultValue={"23:00"}
          />
        </div>
        <div className="flex items-center gap-2 my-3">
          <LazyLoadImage src={Bell} alt="bell" />
          <p>10 Minute before</p>
          <LazyLoadImage src={Close} alt="close btn" className="ml-auto" />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <Button label={"Cancel"} variant="outlined" type="button" />
          <Button
            label={!isEditTask ? "Add" : "Save"}
            variant="contained"
            type="submit"
          />
        </div>
      </form>
    </FormCard>
  );
};

export default TaskForm;
