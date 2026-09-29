"use client";

import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const normalizePhone = (phone: string) => phone.replace(/\D/g, "");

export default function UserSignup() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.password) {
      alert("Name, phone and password are required");
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
      await createUserWithEmailAndPassword(auth, mappedEmail, form.password);

      await setDoc(doc(db, "users", phone), {
        name: form.name,
        phone: phone,
        email: form.email || "",
        role: "user",
        createdAt: new Date(),
      });

      alert("Account created successfully. Please login.");
      router.push("/user-login");
    } catch (err: any) {
      console.error("Signup error", err);
      alert(err?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] text-white">
      <form onSubmit={handleSignup} className="max-w-md w-full bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Create account</h2>

        <input
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <input
          placeholder="Mobile number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <input
          type="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          {loading ? "Creating..." : "Sign up"}
        </button>

        <p className="mt-4 text-sm text-white/70">
          Already have an account? <a href="/user-login" className="text-yellow-400">Login</a>
        </p>
      </form>
    </div>
  );
}
