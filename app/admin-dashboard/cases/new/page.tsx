"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function NewCase() {
  const [form, setForm] = useState({
    userPhone: "",
    title: "",
    caseNumber: "",
    lawyerId: "",
    status: "Open",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createCase = async () => {
    if (!form.userPhone || !form.title || !form.caseNumber) {
      alert("User phone, title and case number are required");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "cases"), {
        ...form,
        documents: [],
        createdAt: new Date(),
      });

      alert("Case created successfully");
      router.push("/admin-dashboard");
    } catch (err) {
      console.error("Create case failed", err);
      alert("Failed to create case");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#020617] text-white">
      <div className="max-w-2xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Create Case for User</h2>

        <input
          placeholder="User phone"
          value={form.userPhone}
          onChange={(e) => setForm({ ...form, userPhone: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <input
          placeholder="Case number"
          value={form.caseNumber}
          onChange={(e) => setForm({ ...form, caseNumber: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <input
          placeholder="Case title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <input
          placeholder="Lawyer id (optional)"
          value={form.lawyerId}
          onChange={(e) => setForm({ ...form, lawyerId: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        />

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="w-full p-3 mb-3 rounded bg-white/5 border border-white/10 outline-none"
        >
          <option>Open</option>
          <option>In progress</option>
          <option>Closed</option>
        </select>

        <textarea
          placeholder="Case description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={5}
          className="w-full p-3 mb-4 rounded bg-white/5 border border-white/10 outline-none"
        />

        <button
          onClick={createCase}
          disabled={loading}
          className="px-4 py-3 rounded bg-yellow-500 text-black font-semibold"
        >
          {loading ? "Creating..." : "Create case"}
        </button>
      </div>
    </div>
  );
}
