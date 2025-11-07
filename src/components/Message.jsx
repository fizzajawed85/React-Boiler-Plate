import React from "react";
export default function Message({ text, type="info" }){
  const base = "p-3 rounded-md border text-sm";
  const cls = type==="success" ? "bg-green-50 border-green-200 text-green-800" : type==="error" ? "bg-red-50 border-red-200 text-red-800" : "bg-blue-50 border-blue-200 text-blue-800";
  return <div className={`${base} ${cls}`}>{text}</div>;
}
