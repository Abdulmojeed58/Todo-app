import React from "react";
import Card from "./Card";
import Button from "./Button";

interface DateItemProps {
    dayName: string,
    day: number,

}

const DateItem: React.FC<DateItemProps> = ({dayName, day}) => {


  return (
    <>
    <Button
            label={
                <li className="list-none">
                <h3>{dayName}</h3>
                <h3>{day}</h3>
              </li>
            }
            onClick={() => {
             
            }}
            variant="outlined"
            type="button"
            customClassName=""
          />
    </>
  );
};

export default DateItem;
