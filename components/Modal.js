// components/Modal.js

import React, { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isOpen && e.target.classList.contains("modal-overlay")) {
                onClose();
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen, onClose]);
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                {children}
            </div>
        </div>
    );
}

export default Modal;
