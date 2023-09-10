import { useEffect, useState } from "react";
import { DatePicker } from "@gsebdev/react-simple-datepicker";

import "../index.css";
import { useAppDispatch } from "../hooks";
import { dateActions } from "../store/date-slice";

function Calendar() {
  const dispatch = useAppDispatch();
  const [currentDate, setCurrentDate] = useState<string>("01/02/2023");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    setCurrentDate(formattedDate);

    dispatch(
      dateActions.setDate({
        year,
        month,
        day,
      })
    );
  }, []);

  const onChangeCallback = ({ target }: any) => {
    const selectedDate = target.value;
    const date = new Date(selectedDate || currentDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    dispatch(
      dateActions.setDate({
        year,
        month,
        day,
      })
    );
    
  };

  return (
    <DatePicker
      id="datepicker-id"
      name="date-demo"
      onChange={onChangeCallback}
      value={currentDate}
      placeholder={currentDate}
    />
  );
}

export default Calendar;
