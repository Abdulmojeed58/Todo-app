import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import { Pagination } from "swiper/modules";

import DateItem from "./DateItem";

export const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

const DateCom = ({}) => {

  const daysNames: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];

  const date = new Date()

  const startYear = date.getFullYear();
  const endYear = date.getFullYear();

  const yearsAndDays: {
    year: number;
    month: string;
    dayName: string;
    day: number;
  }[] = [];
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
        yearsAndDays.push({
          year: year,
          month: monthNames[month],
          dayName: daysNames[new Date(year, month, day).getDay()],
          day: day,
        });
      }
    }
  }
  
  return (
    <div className="flex gap-[16px] overflow-x-hidden mb-5">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={0}      
      >
        {yearsAndDays.map((date, i) => (
          <SwiperSlide key={i} style={{width: '5rem'}}>
            <DateItem {...date} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DateCom;
