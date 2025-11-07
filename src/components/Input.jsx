import React from "react";
export default function Input({ label, className = "", ...props }) {
  return (
    <div className={className}>
      {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">{label}</label>}
      <input {...props} className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#071829] text-gray-900 dark:text-white input-focus" />
    </div>
  );
}
