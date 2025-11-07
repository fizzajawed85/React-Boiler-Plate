import React from "react";

export default function Button({
  children,
  className = "",
  variant = "solid",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const style =
    variant === "ghost"
      ? // outlined button — same shape as solid
        "border-2 border-brand text-brand bg-transparent hover:bg-brand/10 dark:hover:bg-brand-600/10"
      : // solid button — same size/shape, filled color
        "border-2 border-transparent bg-brand text-white hover:bg-brand-600";

  return (
    <button {...props} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}
