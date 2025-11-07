import React, { useState } from "react";
export default function Switch({ initial=false, onChange }) {
  const [on, setOn] = useState(initial);
  const toggle = () => { setOn(s=>!s); onChange && onChange(!on); };
  return (
    <button onClick={toggle} className={`w-12 h-6 rounded-full p-1 flex items-center transition ${on ? "bg-brand" : "bg-gray-300 dark:bg-gray-700"}`}>
      <span className={`bg-white w-4 h-4 rounded-full shadow transform transition ${on ? "translate-x-6" : "translate-x-0"}`}></span>
    </button>
  );
}
