import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { copy } from "../../i18n";
import "./Modal.css";

export default function Modal({ children, title, onClose, className = "" }) {
  const dialog = useRef(null);
  const returnFocus = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (!returnFocus.current) returnFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      element.close();
      returnFocus.current?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        if (
          e.target === e.currentTarget &&
          (e.clientX < bounds.left ||
            e.clientX > bounds.right ||
            e.clientY < bounds.top ||
            e.clientY > bounds.bottom)
        )
          onClose();
      }}
    >
      <button
        className="modal-close icon-button"
        onClick={onClose}
        aria-label={copy.accessibility.closeDialog}
      >
        <X size={22} />
      </button>
      {children}
    </dialog>
  );
}
