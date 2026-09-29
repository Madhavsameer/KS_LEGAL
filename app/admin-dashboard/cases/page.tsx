"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/navigation";

type CaseItem = {
  id: string;
  title?: string;
  caseNumber?: string;
  status?: string;
  userPhone?: string;
  lawyerId?: string;
  createdAt?: any;
};

export default function AdminCasesPage() {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const q = query(collection(db, "cases"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        setCases(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as any) })));
      } catch (err) {
        console.error("Error fetching cases", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-8">
          <div>
            <p className="text-sm uppercase text-yellow-400">Admin</p>
            <h1 className="text-3xl font-semibold">Manage Cases</h1>
          </div>

          <button
            onClick={() => router.push("/admin-dashboard/cases/new")}
            className="rounded-xl bg-yellow-500 px-4 py-2 text-black font-semibold"
          >
            + Create Case
          </button>
        </div>

        {loading && <p className="text-white/60">Loading cases...</p>}

        {!loading && cases.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            No cases created yet.
          </div>
        )}

        <div className="grid gap-4">
          {cases.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-xl font-semibold">{item.title || "Untitled case"}</p>
                  <p className="text-sm text-white/60 mt-1">Case No: {item.caseNumber || item.id}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400 border border-yellow-500/20">
                    {item.status || "Open"}
                  </span>
                  <button
                    onClick={() => router.push(`/cases/${item.id}`)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  >
                    View
                  </button>
                </div>
              </div>

              <div className="mt-3 text-sm text-white/60">
                Client phone: {item.userPhone || "N/A"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
