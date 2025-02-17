import { FC, useEffect, useState } from "react";
import CalendarDay from "@/entities/calendarDay";
import { generateCalendar } from "@/shared/generateCalendar/GenerateCalendar";
import { ICalendarDay } from "../model/type";

export const Calendar: FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [weeks, setWeeks] = useState<ICalendarDay[][]>([]);

  useEffect(() => {
    setWeeks(generateCalendar(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  return (
    <table className="border-collapse w-full h-full">
      <thead>
        <tr>
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
            <th key={day} className="text-center bg-gray-300 font-normal py-1 w-1/12 text-xl">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((day, dayIndex) => (
              <td key={`${weekIndex}-${dayIndex}`} className="w-1/12">
                <CalendarDay year={selectedYear} month={selectedMonth} day={day.day} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
