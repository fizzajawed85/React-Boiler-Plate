import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function FormGrid(){
  return (
    <form className="grid gap-4 md:grid-cols-2 bg-white dark:bg-[#071022] p-6 rounded-2xl shadow-sm">
      <Input label="First name" placeholder="Fizza" />
      <Input label="Last name" placeholder="Jawed" />
      <Input label="Email" type="email" placeholder="you@company.com" />
      <Input label="Phone" placeholder="+92 300 1234567" />
      <div className="md:col-span-2 flex justify-end">
        <Button>Save</Button>
      </div>
    </form>
  );
}
