import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { FormCard } from "./Card";
import Close from "../assets/icons/Icon (4).svg";
import CalendarIcon from "../assets/icons/Icon (1).svg";
import Button from "./Button";
import { useAppDispatch } from "../hooks";
import { taskActions } from "../store/taskSlice";
import { taskViewActions } from "../store/taskViewSlice";
import { ITaskDetails } from "../interfaces/taskInterface";


const TaskDetails: React.FC<ITaskDetails> = ({
  title,
  startTime,
  endTime,
  id,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(taskViewActions.handleViewTaskStatus(false));
    dispatch(taskActions.changeModalStatus(false))
  };

  const handleEditStatus = () => {
    dispatch(taskActions.changeEditStatus(true));

    handleClose();
  };

  const handleDelete = (id: string) => {
    dispatch(taskActions.deleteTask(id));
    handleClose();
  };

  return (
    <FormCard className="pb-[30vh] md:pb-5">
      <LazyLoadImage
        src={Close}
        alt="close btn"
        className="ml-auto cursor-pointer"
        onClick={handleClose}
      />
      <h1 className="font-bold text-[18px]">{title}</h1>
      <div className="my-[32px] flex-center-col gap-[8px]">
        <div className="flex-center-row gap-[8px]">
          <LazyLoadImage src={CalendarIcon} alt="date" />
          <span>20th January, 2023</span>
        </div>
        <div className="flex-center-row gap-[8px]">
          <LazyLoadImage src={CalendarIcon} alt="date" />
          <span>
            {startTime} AM - {endTime} AM {id}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <Button
          label={"Delete"}
          variant="outlined"
          type="button"
          onClick={() => handleDelete(id)}
        />
        <Button
          label={"Edit"}
          variant="contained"
          type="button"
          onClick={handleEditStatus}
        />
      </div>
    </FormCard>
  );
};

export default TaskDetails;
