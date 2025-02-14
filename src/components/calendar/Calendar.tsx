import { FC, useEffect, useState } from "react";

interface CalendarDay {
  day: number | null;
  isCurrentMonth: boolean;
}
export const Calendar: FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [weeks, setWeeks] = useState<CalendarDay[][]>([]);

  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const monthShortNames = ["янв.", "фев.", "марта", "апр.", "майя", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."];
  const [choosenDate, setChoosenDate] = useState<string>(`${new Date().getDate()} ${monthShortNames[selectedMonth]} ${selectedYear}`);

  const [showCalendar, setShowCalendar] = useState(false);

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
    <div>
      <button onClick={() => setShowCalendar(true)}>{choosenDate}</button>
      <div className="absolute bg-white">
        <table className={`border border-collapse ${showCalendar ? "block" : "hidden"}`}>
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
                  <td
                    className={day.day === null ? "border" : "border p-0 hover:bg-gray-200 cursor-pointer"}
                    key={`${weekIndex}-${dayIndex}`}
                    onClick={() => {
                      setChoosenDate(`${day.day} ${monthShortNames[selectedMonth]} ${selectedYear}`);
                      setShowCalendar(!showCalendar);
                    }}
                  >
                    {day.day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
