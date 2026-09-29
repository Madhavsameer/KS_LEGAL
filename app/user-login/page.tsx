"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const normalizePhone = (phone: string) => phone.replace(/\D/g, "");

export default function UserLogin() {
  const [form, setForm] = useState({ phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone || !form.password) {
      alert("Provide phone and password");
      return;
    }

    const phone = normalizePhone(form.phone);
    if (!phone) {
      alert("Enter a valid mobile number");
      return;
    }

    setLoading(true);

    try {
      const mappedEmail = `${phone}@kslegal.app`;
      await signInWithEmailAndPassword(auth, mappedEmail, form.password);

      document.cookie = `userPhone=${encodeURIComponent(phone)}; Path=/; Max-Age=86400; SameSite=Lax`;
      router.push("/user-dashboard");
    } catch (err: any) {
      console.error("Login error", err);
      alert(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] text-white">
      <form onSubmit={handleLogin} className="max-w-md w-full bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <input
          placeholder="Mobile number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-3 mb-4 rounded bg-white/5 border border-white/10 outline-none"
        />

        <button type="submit" disabled={loading} className="w-full p-3 rounded bg-yellow-500 text-black font-semibold">
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="mt-4 text-sm text-white/70">
          Don&apos;t have an account? <a href="/user-signup" className="text-yellow-400">Sign up</a>
        </p>
      </form>
    </div>
  );
}
