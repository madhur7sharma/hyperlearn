import React, { useState } from "react";
import Calendar from "react-calendar";
import './calendar.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div>
      <Calendar className="calendar.css" onChange={onChange} value={date} />
      {date.toString()}
    </div>
  );
};

export default ReactCalendar;