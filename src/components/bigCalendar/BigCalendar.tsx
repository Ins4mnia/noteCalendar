import { FC, useEffect, useState } from "react";
import { BigCalendarDay } from "./bigCalendarDay/BigCalendarDay";

interface CalendarDay {
  day: number | null;
  isCurrentMonth: boolean;
}
export const BigCalendar: FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [weeks, setWeeks] = useState<CalendarDay[][]>([]);

  const generateCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    const startDay = (firstDay.getDay() + 6) % 7;
    const daysInMonth = lastDay.getDate();

    const calendar: CalendarDay[] = [];

    for (let i = 0; i < startDay; i++) {
      calendar.push({ day: null, isCurrentMonth: false });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push({ day, isCurrentMonth: true });
    }

    while (calendar.length % 7 !== 0) {
      calendar.push({ day: null, isCurrentMonth: false });
    }

    const weeks: CalendarDay[][] = [];
    for (let i = 0; i < calendar.length; i += 7) {
      weeks.push(calendar.slice(i, i + 7));
    }

    return weeks;
  };
  useEffect(() => {
    setWeeks(generateCalendar(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  return (
    <table className="border border-collapse w-full h-full">
      <thead>
        <tr>
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
            <th key={day} className="text-center border p-3">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((day, dayIndex) => (
              <td className="border p-0" key={`${weekIndex}-${dayIndex}`}>
                <BigCalendarDay year={selectedYear} month={selectedMonth} day={day.day} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
