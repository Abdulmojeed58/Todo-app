import React from "react";
import Card from "./Card";

interface TaskItemProps {
  title: string;
  startTime: string;
  endTime: string;
  id: string;
  completed: boolean;
  onClick: () => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, startTime, endTime, id, completed, onClick, inputProps }) => {
  return (
    <Card className="bg-[#F9FAFB] border-b border-b-skin-border-gray-200">
      <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
        <div  className="flex items-center gap-3">
          <input type="checkbox" {...inputProps} />
          <div className="text-skin-text-primary">
            <h3 className={`font-medium text-[14px] ${completed ? 'line-through text-skin-text-done' : ''}`}>{title}</h3>
            <p className={`font-normal text-[14px] ${completed ? 'line-through text-skin-text-done' : ''}`}>{startTime + ' - ' + endTime}</p>
          </div>
        </div>
        <p className="text-skin-text-gray font-medium text-[14px]">Today</p>
      </div>
    </Card>
  );
};

export default TaskItem;
