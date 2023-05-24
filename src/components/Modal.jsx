import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { AiOutlineClose } from "react-icons/ai";

function Modal() {
  const user = useContext(AppContext);
  const { closemodal, isModalOpen } = user;
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h2>modal content</h2>
        <button className="close-modal-btn" onClick={closemodal}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default Modal;
