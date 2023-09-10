import React from "react";
import Card from "./Card";
import { IDate } from "../interfaces/taskInterface";

interface TaskItemProps {
  title: string;
  startTime: string;
  endTime: string;
  date: IDate;
  id: string;
  completed: boolean;
  onClick: () => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  startTime,
  endTime,
  date,
  completed,
  onClick,
  inputProps,
}) => {
  const dateT = new Date();
  const day = dateT.getDate().toString().padStart(2, "0");
  const month = (dateT.getMonth() + 1).toString().padStart(2, "0");
  const year = dateT.getFullYear();

  const today = `${month}/${day}/${year}`;

  const formatedDate = `${date.month}/${date.day}/${date.year}`;

  return (
    <Card className="bg-[#F9FAFB] border-b border-b-skin-border-gray-200 hover:bg-skin-gray-bg">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center md:gap-3">
          <div>
            <input type="checkbox" className="checkbox" {...inputProps} />
          </div>
          <div className="text-skin-text-primary">
            <h3
              style={{ whiteSpace: "normal" }}
              className={`font-medium text-[14px] ${
                completed ? "line-through text-skin-text-done" : ""
              }`}
            >
              {title}
            </h3>
            <p
              className={`font-normal text-[14px] ${
                completed ? "line-through text-skin-text-done" : ""
              }`}
            >
              {startTime + " - " + endTime}
            </p>
          </div>
        </div>
        <p className="text-skin-text-gray font-medium text-[14px]">{`${
          !date.month || formatedDate === today ? "Toady" : formatedDate
        }`}</p>
      </div>
    </Card>
  );
};

export default TaskItem;
