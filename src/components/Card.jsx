import React from "react";
export default function Card({ title, subtitle, value, children, icon }) {
  return (
    <div className="bg-white dark:bg-[#071022] rounded-2xl p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          {title && <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</div>}
          {value && <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</div>}
          {subtitle && <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</div>}
        </div>
        {icon && <div className="text-brand">{icon}</div>}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
