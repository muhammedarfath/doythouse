import React from "react";

function SideModal({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-end mt-24 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white w-96 h-full shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold">Settings</h2>
        <p>Here you can add your settings content.</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SideModal;
