import { DatePicker } from "@gsebdev/react-simple-datepicker";

import { FormCard } from "./Card";
import '../index.css';

function Calendar() {
  const onChangeCallback = () => {
    // a callback function when user select a date
  };

  return (
    // <FormCard>
      <DatePicker
        id="datepicker-id"
        name="date-demo"
        onChange={onChangeCallback}
        value={"01/02/2023"}
      />
    // </FormCard>
  );
}

export default Calendar;
