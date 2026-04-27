"use client";

import { use, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }: any) {
  const { id } = use(params); // ✅ unwrap params
  const router = useRouter();
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setForm(docSnap.data());
      }
    };

    fetchBlog();
  }, [id]); // ✅ add dependency

  const updateBlog = async () => {
    await updateDoc(doc(db, "blogs", id), form);
    router.push("/admin-dashboard/blogs");
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Blog</h1>

      <input
        value={form.title}
        onChange={(e)=>setForm({...form, title:e.target.value})}
      />

      <input
        value={form.excerpt}
        onChange={(e)=>setForm({...form, excerpt:e.target.value})}
      />

      <textarea
        value={form.content}
        onChange={(e)=>setForm({...form, content:e.target.value})}
      />

      <button onClick={updateBlog}>Update</button>
    </div>
  );
}