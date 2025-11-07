import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";

export default function Contact(){
  const handleSubmit = (e) => { e.preventDefault(); alert("Thanks — we will reply soon (demo)."); };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-[#071022] p-8 rounded-2xl shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact sales</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Tell us about your needs and we'll reach out.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <Input label="Name" placeholder="Your full name" />
        <Input label="Work email" type="email" placeholder="you@company.com" />
        <Input label="Company" placeholder="Company name" />
        <div>
          <label className="text-sm text-gray-700 dark:text-gray-200 mb-1 block">Message</label>
          <textarea className="w-full rounded-md border border-gray-200 dark:border-gray-700 p-3 bg-white dark:bg-[#071022] text-gray-900 dark:text-white" rows="6" placeholder="How can we help?"></textarea>
        </div>

        <div className="flex items-center justify-between">
          <Message text="We typically respond within 24 hours." type="info" />
          <Button type="submit">Send message</Button>
        </div>
      </form>
    </div>
  );
}
