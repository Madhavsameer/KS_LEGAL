"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";

type CaseItem = {
  id: string;
  caseNumber?: string;
  title?: string;
  status?: string;
  lawyerId?: string;
  createdAt?: any;
};

export default function UserDashboard() {
  const [phone, setPhone] = useState<string | null>(null);
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cookie = (document.cookie || "")
      .split("; ")
      .find((row) => row.startsWith("userPhone="));

    const stored = cookie ? decodeURIComponent(cookie.split("=")[1]) : "";

    if (!stored) {
      router.push("/user-login");
      return;
    }

    setPhone(stored);

    const fetchCases = async () => {
      try {
        const q = query(collection(db, "cases"), where("userPhone", "==", stored));
        const snap = await getDocs(q);
        const data = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
        setCases(data);
      } catch (err) {
        console.error("Error fetching cases", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, [router]);

  const handleLogout = async () => {
    document.cookie = "userPhone=; Path=/; Max-Age=0";
    try {
      await auth.signOut();
    } catch (err) {
      console.error("Logout error", err);
    }
    router.push("/");
  };

  return (
    <div className="min-h-screen p-6 bg-[#020617] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-semibold">Your Cases</h1>
            <p className="text-sm text-white/60">Logged in as {phone || "user"}</p>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm"
          >
            Logout
          </button>
        </div>

        {loading && <p className="text-white/60">Loading your cases...</p>}

        {!loading && cases.length === 0 && (
          <div className="rounded border border-white/10 bg-white/5 p-6">
            No cases found yet.
          </div>
        )}

        <div className="grid gap-4">
          {cases.map((c) => (
            <div key={c.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold">{c.title || "Untitled case"}</p>
                  <p className="text-sm text-white/60">Case No: {c.caseNumber || c.id}</p>
                </div>
                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400 border border-yellow-500/20">
                  {c.status || "Open"}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`/cases/${c.id}`} className="text-sm text-yellow-400">View details</a>
                <a href={`/cases/${c.id}#messages`} className="text-sm text-white/60">Discussion</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
