import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ open, onClose, children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} open={open} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
