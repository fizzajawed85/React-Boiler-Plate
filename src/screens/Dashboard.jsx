import { useState } from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import Switch from "../components/Switch";
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";
import Modal from "../components/Modal";
import FormGrid from "../components/FormGrid";
import Message from "../components/Message";
import Button from "../components/Button";
import { FiUsers, FiActivity, FiSettings } from "react-icons/fi";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        <Button text="Open Modal" onClick={() => setOpen(true)} />
      </div>

      {/* Top Cards Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        <Card title="Users" description="1,245 Active" icon={<FiUsers />} />
        <Card title="Sales" description="$23,500 this month" icon={<FiActivity />} />
        <Card title="System Health" description="All systems running" icon={<FiSettings />} />
      </div>

      {/* Message / Notification */}
      <Message text="Welcome back, Fizza Jawed! Everything looks great today 👋" type="success" />

      {/* Switches / Controls */}
      <div className="bg-white rounded-2xl shadow-md p-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Dark Mode</label>
          <Switch />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Accept Terms</label>
          <Checkbox label="I agree" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Select Option</label>
          <div className="space-y-2">
            <Radio label="Option 1" name="opt" />
            <Radio label="Option 2" name="opt" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button text="Save Settings" />
        </div>
      </div>

      {/* Form Grid Section */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Quick Form</h2>
        <FormGrid />
      </div>

      {/* Table Section */}
      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">User List</h2>
        <Table />
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
