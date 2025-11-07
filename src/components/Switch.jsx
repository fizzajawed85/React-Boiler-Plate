import { useState } from "react";

export default function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
}
