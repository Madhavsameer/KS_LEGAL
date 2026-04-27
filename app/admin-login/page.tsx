// app/admin-login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleLogin = () => {
    if (form.username === "admin" && form.password === "kslegal123") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>

      <input placeholder="Username"
        onChange={(e)=>setForm({...form, username:e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={(e)=>setForm({...form, password:e.target.value})} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}