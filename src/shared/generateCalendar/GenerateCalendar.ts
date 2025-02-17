import { ICalendarDay } from "@/widgets/Calendar/model/type";

export const generateCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const calendar: ICalendarDay[] = [];

  for (let i = 0; i < startDay; i++) {
    calendar.push({ day: null, isCurrentMonth: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendar.push({ day, isCurrentMonth: true });
  }

  while (calendar.length % 7 !== 0) {
    calendar.push({ day: null, isCurrentMonth: false });
  }

  const weeks: ICalendarDay[][] = [];
  for (let i = 0; i < calendar.length; i += 7) {
    weeks.push(calendar.slice(i, i + 7));
  }

  return weeks;
};
