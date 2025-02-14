import { Calendar } from "@/components/calendar/Calendar";
import { Modal } from "@/components/modal/Modal";
import { FC, useState } from "react";

interface Props {}

export const ChoosenDay: FC<Props> = ({}) => {
  const times = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-between p-2">
        {times.map((elem) => (
          <div className="flex items-baseline p-2 cursor-pointer gap-2" onClick={() => setIsOpen(!isOpen)}>
            {elem}
            <span className="border-b border-gray-300 w-full block"></span>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col">
          <input placeholder="Название" className="w-full border p-2 rounded-sm outline-neutral-200" />
          <div className="flex flex-row justify-between">
            <div className="border p-2">
              <h2>Начало события</h2>
              <div className="flex flex-row justify-between">
                <p>Дата</p>
                <Calendar />
              </div>
            </div>
            <div>
              <h2>Конец события</h2>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
