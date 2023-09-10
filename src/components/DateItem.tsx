import React from "react";
import Button from "./Button";

interface DateItemProps {
  dayName: string;
  day: number;
}

const DateItem: React.FC<DateItemProps> = ({dayName, day}) => {
  return (
    <Button
      label={
        <li className="list-none">
          <h3>{dayName}</h3>
          <h3>{day}</h3>
        </li>
      }
      onClick={() => {}}
      variant="outlined"
      type="button"
      customClassName={` w-[62px] py-[10px] px-[16px] hover:bg-skin-blue hover:text-white`}
    />
  );
};

export default DateItem;
