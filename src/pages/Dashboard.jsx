import React, { useState } from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import FormGrid from "../components/FormGrid";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Message from "../components/Message";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext"; // ✅ Correct import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { theme } = useTheme(); // ✅ Use hook instead of useContext

  // Chart data
  const userData = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 1200 },
    { month: "Apr", users: 1800 },
    { month: "May", users: 2400 },
    { month: "Jun", users: 3000 },
  ];

  const revenueData = [
    { name: "Product A", value: 4000 },
    { name: "Product B", value: 3000 },
    { name: "Product C", value: 2000 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Workspace</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Overview of your workspace activity
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => setOpen(true)}>New project</Button>
          <Button variant="ghost">Invite</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Active users" value="1,245" subtitle="This month" />
        <Card title="Tasks completed" value="4,390" subtitle="All time" />
        <Card title="Automations" value="128" subtitle="Running" />
      </div>

      <Message
        text={`Hello ${user?.name || "User"}, here's what's happening in your workspace.`}
        type="info"
      />

      {/* CHARTS SECTION */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Monthly User Growth
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
                />
                <XAxis dataKey="month" stroke={theme === "dark" ? "#9ca3af" : "#374151"} />
                <YAxis stroke={theme === "dark" ? "#9ca3af" : "#374151"} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
                    color: theme === "dark" ? "#fff" : "#111827",
                  }}
                />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Revenue Breakdown
          </h3>
          <div className="h-72 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {revenueData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Quick actions
          </h3>
          <FormGrid />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Team members
          </h3>
          <Table />
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Create a new project">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Name your project and set a template to get started.
        </p>
        <div className="mt-4 text-right">
          <Button onClick={() => setOpen(false)}>Create</Button>
        </div>
      </Modal>
    </div>
  );
}
