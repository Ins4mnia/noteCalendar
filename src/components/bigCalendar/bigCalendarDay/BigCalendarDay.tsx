import { Modal } from "@/components/modal/Modal";
import { FC, useState } from "react";
import { Link } from "react-router";

interface Props {
  year: number;
  month: number;
  day: number | null;
}

export const BigCalendarDay: FC<Props> = ({ year, month, day }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (day === null) return;
  return (
    <>
      <div className="p-3 text-center hover:bg-gray-200 cursor-pointer w-full h-full relative" onClick={() => setIsOpen(!isOpen)}>
        <span className="absolute left-0 top-0 bg-gray-300 rounded px-2 py-1 hover:bg-gray-400 transition-colors">{day}</span>
        <div className="flex flex-col"></div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Link to={`/choosenday?date=${day}${month}${year}`}>Открыть полностью</Link>
      </Modal>
    </>
  );
};
