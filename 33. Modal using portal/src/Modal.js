import ReactDOM from "react-dom";

export function Modal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <div className="modal-outer">
      <div className="modal">{children}</div>
    </div>,

    modalRoot
  );
}
