import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [form, setForm] = useState({ email:"", password:"" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const res = login(form);
    if (!res.ok) {
      if (res.needsSignup) { navigate("/signup"); return; }
      setError(res.message || "Login failed");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#071022] rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Log in to access your FlowSync workspace.</p>
      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
      <form onSubmit={submit} className="mt-4 space-y-4">
        <Input label="Work email" type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
        <Input label="Password" type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">Need an account? <button type="button" onClick={()=>navigate("/signup")} className="text-brand">Sign up</button></div>
          <Button type="submit">Log in</Button>
        </div>
      </form>
    </div>
  );
}

