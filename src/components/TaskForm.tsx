import React, { useRef, useState } from "react";

import Close from "../assets/icons/Icon (4).svg";
import Bell from "../assets/icons/bell-01.svg";
import Clock from "../assets/icons/clock.svg";
import Calendar from "../assets/icons/calendar.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../hooks";
import { taskActions } from "../store/taskSlice";
import { FormCard } from "./Card";
import { taskViewActions } from "../store/taskViewSlice";

const TaskForm = () => {
  const inputRef = useRef<any>(null);
  const dateRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const isEditTask = useAppSelector((state) => state.tasks.isEditTask);
  const item = useAppSelector((state) => state.taskView.taskItem);
  const [startTime, setStartTime] = useState<string>("00:00");
  const [endTime, setEndTime] = useState<string>("00:00");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    const date = new Date(dateRef.current.value);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    dispatch(
      taskActions.addTask({
        title: inputRef.current.value,
        startTime: startTime,
        endTime: endTime,
        date: {
          year,
          month,
          day,
        },
        item,
      })
    );
    handleClose();
  };

  const handleClose = () => {
    dispatch(taskActions.changeEditStatus(false));
    dispatch(taskActions.changeTaskStatus(false));
    dispatch(taskViewActions.handleViewTaskStatus(false));
    dispatch(taskActions.changeModalStatus(false));
    inputRef.current.value = "";
  };

  return (
    <FormCard
      className={`${
        isEditTask ? "pb-[392px] md:pb-5 h-[648px] md:h-auto" : ""
      }`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
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
          className="border-skin-gray-bg outline-none w-full border-[1px] rounded-[8px] bg-skin-bg-gray h-[140px] p-3"
          placeholder={`${isEditTask ? "Create wireframe" : ""}`}
          ref={inputRef}
          defaultValue={isEditTask ? item.title : ""}
        ></textarea>
        <div className="grid grid-cols-3 gap-[16px] lg:gap-[16px] items-center h-[40px]">
          <div className="time-input-container time-input-con">
            <label htmlFor="Calendar">
              <LazyLoadImage src={Calendar} alt="calendar" />
            </label>
            <input type="date" id="Calendar" className="time-input" ref={dateRef} required />
          </div>

          <div className="time-input-container time-input-con">
            <label htmlFor="startTimeInput">
              <LazyLoadImage src={Clock} alt="Clock" />
            </label>
            <input
              type="time"
              id="startTimeInput"
              name="myTime"
              className="time-input"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="time-input-container time-input-con">
            <label htmlFor="endTimeInput">
              <LazyLoadImage src={Clock} alt="Clock" />
            </label>
            <input
              type="time"
              id="endTimeInput"
              name="myTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="time-input"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LazyLoadImage src={Bell} alt="bell" />
          <p>10 Minute before</p>
          <LazyLoadImage src={Close} alt="close btn" className="ml-auto" />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-[16px]">
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
