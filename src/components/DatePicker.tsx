import React, { useState, useEffect, useRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/utilits";

type DatePickerProps = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};

const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  const today = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(selectedDate);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const daysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) =>
    new Date(year, month, 1).getDay();

  const handleDateClick = (date: Date) => {
    setCurrentDate(date);
    onChange(date);
    setIsOpen(false);
  };

  const displayDates = () => {
    const totalDays = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);
    const dates = [];

    for (let i = 0; i < firstDay; i++) dates.push(null);
    for (let i = 1; i <= totalDays; i++) {
      const currentDate = new Date(year, month, i);
      dates.push({
        date: currentDate,
        isToday: currentDate.toDateString() === today.toDateString(),
      });
    }

    return dates;
  };

  const dateButtonClasses = cva(
    "cursor-pointer aspect-square flex items-center justify-center rounded-lg text-sm",
    {
      variants: {
        isToday: {
          true: "bg-gray-200",
          false: "",
        },
        selected: {
          true: "bg-primary text-white",
          false: "",
        },
      },
    }
  );

  return (
    <div ref={datePickerRef} className="relative">
      <input
        type="text"
        readOnly
        value={currentDate ? currentDate.toLocaleDateString() : "Select date"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="border border-black p-2 rounded-[30px] cursor-pointer text-left w-full outline-none text-sm  h-10 select-none text-black"
      />
      {isOpen && (
        <div className="absolute mt-2 z-10 bg-white rounded-2xl shadow-lg w-[280px] border">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => {
                if (month === 0) {
                  setMonth(11);
                  setYear((prevYear) => prevYear - 1);
                } else {
                  setMonth((prevMonth) => prevMonth - 1);
                }
              }}
              className="p-2"
            >
              Prv
            </button>

            <div className="flex items-center gap-1">
              <span>
                {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
                  new Date(year, month)
                )}
              </span>
              <span>{year}</span>
            </div>

            <button
              onClick={() => {
                if (month === 11) {
                  setMonth(0);
                  setYear((prevYear) => prevYear + 1);
                } else {
                  setMonth((prevMonth) => prevMonth + 1);
                }
              }}
              className="p-2"
            >
              Next
            </button>
          </div>

          <div className="grid grid-cols-7 px-4">
            {dayNames.map((day, index) => (
              <div
                key={index}
                className="text-center font-medium text-sm flex justify-center items-center aspect-square"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 px-4 pb-4">
            {displayDates().map((dateObj, index) =>
              dateObj ? (
                <button
                  key={index}
                  className={cn(
                    dateButtonClasses({
                      isToday: dateObj.isToday,
                      selected:
                        currentDate &&
                        dateObj.date.getTime() === currentDate.getTime(),
                    })
                  )}
                  onClick={() => handleDateClick(dateObj.date)}
                >
                  {dateObj.date.getDate()}
                </button>
              ) : (
                <div key={index} className="empty-date"></div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
