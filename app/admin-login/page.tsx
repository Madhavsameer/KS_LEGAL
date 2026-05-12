"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (form.username === "admin" && form.password === "kslegal123") {
        // ✅ FIX: cookie used everywhere
        document.cookie =
          "isAdmin=true; Path=/; Max-Age=86400; SameSite=Lax";

        router.push("/admin-dashboard");
      } else {
        alert("Invalid credentials");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen flex">
      {/* ✅ YOUR UI — UNCHANGED */}
      <div className="hidden md:flex w-1/2 bg-black text-white flex-col justify-between p-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">KS Legal</h1>
          <p className="text-gray-400 mt-3 text-sm">
            Secure Admin Panel Access
          </p>
        </div>

        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold leading-snug">
            Manage blogs, users and content in one place.
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Fast. Secure. Minimal.
          </p>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} KS Legal
        </p>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Please enter your credentials
          </p>

          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 mb-4 rounded-lg border"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-6 rounded-lg border"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-black text-white"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
