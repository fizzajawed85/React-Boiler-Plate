import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const res = signup(form);
    if (!res.ok) setMsg(res.message || "Signup failed");
    else navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#071022] rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create your FlowSync account</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Start your 14-day free trial. No credit card required.</p>
      {msg && <div className="mt-3 text-sm text-red-600">{msg}</div>}
      <form onSubmit={submit} className="mt-4 space-y-4">
        <Input label="Full name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
        <Input label="Work email" type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
        <Input label="Password" type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">Already have an account? <button type="button" onClick={()=>navigate("/login")} className="text-brand">Log in</button></div>
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </div>
  );
}
