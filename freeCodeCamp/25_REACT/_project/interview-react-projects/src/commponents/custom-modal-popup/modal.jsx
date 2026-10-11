import { MdDisabledByDefault } from "react-icons/md";
import "./modal.css";
import ModalTest from "./modal-test.jsx";


export default function Modal({ id, header, body, footer, onClose }) {
 
    return (
        <div id= {id || "Modal"}   className="modal">
            <div className="content">

                <div className="header">
                    <span className="modal-icon" onClick={onClose}>&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div>

                <div className="body">
                    {/* <span className="modal-icon">&times;</span> */}
                    <h2>{body ? body : "Modal Body Header"}</h2>
                    <p>{body ? body : "Modal Body Content"}</p>
                </div>

                <div className="footer">
                    {/* <span className="modal-icon">&times;</span> */}
                    <h2>{footer ? footer : "Modal Footer Header"}</h2>
                    <p>{footer ? footer : "Custom Footer Content"}</p>
                </div>

            </div>
        </div>
  );
}