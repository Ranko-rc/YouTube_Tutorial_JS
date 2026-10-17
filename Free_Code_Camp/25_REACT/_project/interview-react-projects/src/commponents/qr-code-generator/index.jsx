    // import React from "react";
    import "./styles.css";
    import { useState } from "react";
    import QRCode from "react-qr-code";



    export default function QRCodeGenerator() {
  
    const generateQrCode = () => {
        // Logic to generate QR code based on the text input
        setQrCode(`Generated QR code for: ${text}`);
    };
    const [text, setText] = useState("");
    const [qrCode, setQrCode] = useState("");

    function handleInputChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="qr-code-generator">
            <h1>QR Code Generator</h1>
            <div className="input-container">
                <input type="text" name="qr-Text" placeholder="Enter text to generate QR code" value={text} onChange={handleInputChange} />
                <button disabled={!text} onClick={generateQrCode}>Generate QR Code</button>
            </div>
            <div id="qr-code">
                <QRCode id="qr-code" value={qrCode} size={400}>{qrCode}   </QRCode>
            </div>

            <p>Scan the QR code above with your mobile device.</p>
        </div>
    );
}

