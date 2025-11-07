import React from "react";
export default function Modal({ open, onClose, title="Modal", children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white dark:bg-[#071022] rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-500 dark:text-gray-300">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
