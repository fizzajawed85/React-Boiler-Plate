import React from "react";
export default function Table({ data }) {
  const rows = data || [
    { id:1, name:"John Doe", email:"john@acme.com", role:"Admin" },
    { id:2, name:"Jane Smith", email:"jane@acme.com", role:"Editor" },
    { id:3, name:"Ali Khan", email:"ali@acme.com", role:"Viewer" },
  ];
  return (
    <div className="bg-white dark:bg-[#071022] rounded-2xl shadow-sm overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-200">ID</th>
            <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-200">Name</th>
            <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-200">Email</th>
            <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-200">Role</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900">
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{r.id}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{r.name}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{r.email}</td>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{r.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
