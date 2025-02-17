import { Modal } from "@/shared/ui/modal/ui/Modal";
import { Expand } from "lucide-react";
import { FC, useState } from "react";
import { Link } from "react-router";

interface Props {
  year: number;
  month: number;
  day: number | null;
}

export const CalendarDay: FC<Props> = ({ year, month, day }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (day === null) return;
  return (
    <>
      <div
        className="text-center bg-gray-300 hover:bg-gray-100 cursor-pointer w-full h-full relative transition-colors rounded-lg duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="absolute left-0 top-0 bg-gray-400 rounded px-2 py-1">{day}</span>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div className="flex flex-row gap-8 h-full">
          <div>
            <Link to={`/day?date=${day}${month}${year}`}>
              <Expand size={30} className="bg-gray-300 rounded-md p-1" />
            </Link>
          </div>
          <div className="w-full h-full flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="bg-gray-300 rounded-md p-2">1</div>
              <div className="bg-gray-300 rounded-md p-2">2</div>
              <div className="bg-gray-300 rounded-md p-2">3</div>
            </div>
            <Link className="text-center" to={`/day?date=${day}${month}${year}`}>
              Добавить запись
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};
