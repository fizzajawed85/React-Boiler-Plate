import React from "react";
export default function Checkbox({ label, checked=false, onChange }) {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="w-4 h-4 text-brand rounded border-gray-300" />
      <span className="text-sm text-gray-700 dark:text-gray-200">{label}</span>
    </label>
  );
}
