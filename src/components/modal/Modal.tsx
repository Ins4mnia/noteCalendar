import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-lg min-w-[500px] min-h-[400px] relative p-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -right-10 top-0 bg-gray-200 rounded-md p-1 hover:bg-gray-300 transition-colors">
          <X className="h-6 w-6 text-black" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
