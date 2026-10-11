import { useState } from "react";
import Modal from "./modal";



export default function ModalTest() {

const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModal() {
        setShowModalPopup(!showModalPopup);
    }

    function onCloseModal() {
        setShowModalPopup(false);
    }

  return (
    <div className="modal-test">
       <button onClick={handleToggleModal}>Open Modal</button>
        {showModalPopup && <Modal body={<div>Custom Body Content</div>} onClose={onCloseModal} />}
    </div>
        
  );
}
