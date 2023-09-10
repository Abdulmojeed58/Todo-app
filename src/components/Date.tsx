// Import Swiper React components
import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import DateItem from "./DateItem";

const DateCom = ({}) => {
    const [slidesNo, setSlideNumber] = useState<number>()

    useEffect(() => {
        // Define a function to handle the screen resize
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 1000) {
            setSlideNumber(4);
          } else if(screenWidth >= 1000 && screenWidth < 1300) {
            setSlideNumber(8);
        } else if(screenWidth >= 1300 && screenWidth < 1600) {
            setSlideNumber(9);
        } else if(screenWidth >= 1600 && screenWidth < 1900) {
            setSlideNumber(10);
        } else if(screenWidth >= 1900 && screenWidth < 2200) {
            setSlideNumber(11);

        } 
        console.log(screenWidth)
    };
      
        window.addEventListener("resize", handleResize);
      
        handleResize();
      
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);


    // console.log(slidesNo)



  const monthNames: string[] = [
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

  const daysNames: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];

  const startYear = 2021;
  const endYear = 2023;

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
  // console.log(yearsAndDays);
  return (
    <div className="flex gap-[16px] overflow-x-hidden mb-5">
      <Swiper
        slidesPerView={slidesNo}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {yearsAndDays.map((date, id) => (
        <SwiperSlide>
            <DateItem key={id} {...date} />
        </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default DateCom;
