"use client";

import { use, useEffect, useState } from "react";
import { db, storage } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function CaseDetailPage({ params }: any) {
  const { id } = use(params) as { id: string };

  const [caseData, setCaseData] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [lawyer, setLawyer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [canUpload, setCanUpload] = useState(false);

  const loadCase = async () => {
    try {
      const caseRef = doc(db, "cases", id);
      const snap = await getDoc(caseRef);
      if (!snap.exists()) {
        setCaseData(null);
        return;
      }

      const data = { id: snap.id, ...snap.data() };
      setCaseData(data);

      if (data.lawyerId) {
        const lawyerSnap = await getDoc(doc(db, "lawyers", data.lawyerId));
        if (lawyerSnap.exists()) {
          setLawyer(lawyerSnap.data());
        }
      }

      const msgQ = query(
        collection(db, "cases", id, "messages"),
        orderBy("createdAt", "asc")
      );
      const msgSnap = await getDocs(msgQ);
      setMessages(msgSnap.docs.map((m) => ({ id: m.id, ...m.data() })));
    } catch (err) {
      console.error("Error loading case", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const roleCookie = (document.cookie || "")
      .split("; ")
      .find((row) => row.startsWith("userRole="));
    const role = roleCookie ? roleCookie.split("=")[1] : "";
    setCanUpload(role === "lawyer" || role === "admin" || role === "staff");

    loadCase();
  }, [id]);

  const sendMessage = async () => {
    const phone = decodeURIComponent(
      (document.cookie || "")
        .split("; ")
        .find((row) => row.startsWith("userPhone="))?.split("=")[1] || ""
    );

    if (!message.trim()) return;

    const payload = {
      senderPhone: phone || "guest",
      senderName: "Customer",
      senderRole: "user",
      message,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "cases", id, "messages"), payload);
    setMessage("");
    loadCase();
  };

  const handleUpload = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file || !caseData) return;

    setUploading(true);
    try {
      const fileRef = ref(storage, `cases/${id}/docs/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);

      const updatedDocuments = [
        ...(caseData.documents || []),
        {
          name: file.name,
          url,
          uploadedAt: new Date().toISOString(),
          uploadedBy: "lawyer",
        },
      ];

      await updateDoc(doc(db, "cases", id), {
        documents: updatedDocuments,
      });

      loadCase();
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">Loading case...</div>;
  }

  if (!caseData) {
    return <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">Case not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase text-yellow-400">Case details</p>
          <h1 className="text-3xl font-semibold mt-2">{caseData.title || "Untitled case"}</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
            <span>Case No: {caseData.caseNumber || id}</span>
            <span>Status: {caseData.status || "Open"}</span>
            <span>Phone: {caseData.userPhone || "N/A"}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-4">About the case</h2>
            <p className="text-white/75 leading-7">{caseData.description || "No detailed description added yet."}</p>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Documents</h3>
              {caseData.documents?.length ? (
                <ul className="space-y-2">
                  {caseData.documents.map((docItem: any, index: number) => (
                    <li key={index} className="flex items-center justify-between rounded bg-white/5 p-3">
                      <span>{docItem.name}</span>
                      {docItem.url ? (
                        <a href={docItem.url} target="_blank" rel="noreferrer" className="text-yellow-400">Open</a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-white/60">No documents uploaded yet.</p>
              )}

              {canUpload && (
                <div className="mt-4">
                  <label className="inline-flex items-center justify-center rounded bg-yellow-500 px-4 py-2 text-sm font-semibold text-black cursor-pointer">
                    {uploading ? "Uploading..." : "Upload document"}
                    <input type="file" className="hidden" onChange={handleUpload} />
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-4">Assigned lawyer</h2>
            {lawyer ? (
              <div>
                <p className="font-medium">{lawyer.name || "Lawyer"}</p>
                <p className="text-sm text-white/60">{lawyer.specialization || "Legal Counsel"}</p>
                <p className="text-sm text-white/60 mt-2">{lawyer.email || ""}</p>
              </div>
            ) : (
              <p className="text-white/60">No lawyer assigned yet.</p>
            )}
          </div>
        </div>

        <div id="messages" className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold mb-4">Case discussion</h2>

          <div className="space-y-3 mb-5">
            {messages.length === 0 ? (
              <p className="text-white/60">No messages yet.</p>
            ) : (
              messages.map((item) => (
                <div key={item.id} className="rounded-xl bg-black/20 p-3 border border-white/10">
                  <div className="flex items-center justify-between gap-3 text-xs text-white/60 mb-1">
                    <span>{item.senderName || "User"}</span>
                    <span>{item.senderRole || "user"}</span>
                  </div>
                  <p className="text-sm leading-6 text-white/80">{item.message}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex gap-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl bg-black/20 border border-white/10 outline-none"
              placeholder="Write a message..."
            />
          </div>

          <div className="mt-3">
            <button onClick={sendMessage} className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
