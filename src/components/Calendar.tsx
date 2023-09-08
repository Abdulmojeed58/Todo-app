import React, { useState } from "react";
import { FormCard } from "./Card";
// import Calendar from 'moedim';

// const Calendar = require('moedim');

interface CalendarProps {}

const CalendarCom: React.FC<CalendarProps> = ({}) => {
  const [value, setValue] = useState<any>(new Date())
  
  
  return (
    <FormCard>
      <div>Calendar</div>
    </FormCard>
    // <Calendar value={value} onChange={(d: any) => setValue(d)} />
  );
};

export default CalendarCom;
