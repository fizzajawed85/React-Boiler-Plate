import React from "react";

export default function About() {
  return (
    <div className="bg-white dark:bg-[#071022] p-8 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About FlowSync</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">FlowSync is a collaboration and automation platform built for small to medium teams. We focus on simple tools that scale: shared boards, automation, integrations, and analytics — designed to reduce overhead and increase focus.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 dark:bg-[#071829] rounded-lg">
          <div className="font-semibold text-gray-900 dark:text-white">Mission</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Help teams work better together.</div>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-[#071829] rounded-lg">
          <div className="font-semibold text-gray-900 dark:text-white">Security</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">We take privacy seriously with RBAC and audit logs.</div>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-[#071829] rounded-lg">
          <div className="font-semibold text-gray-900 dark:text-white">Support</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Email & chat support for all paying customers.</div>
        </div>
      </div>
    </div>
  );
}
