"use client";

import { use, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }: any) {
  // ✅ Next.js 16 fix
 const { id } = use(params) as { id: string };

  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    tags: "",
    author: "",
    readTime: "",
  });

  // 🔄 Fetch blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const ref = doc(db, "blogs", id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data: any = snap.data();

          setForm({
            title: data.title || "",
            excerpt: data.excerpt || "",
            content: data.content || "",
            image: data.image || "",
            category: data.category || "",
            tags: data.tags ? data.tags.join(", ") : "",
            author: data.author || "",
            readTime: data.readTime || "",
          });
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      }

      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  // 💾 Update blog
  const updateBlog = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert("Title and content are required");
      return;
    }

    setSaving(true);

    try {
      await updateDoc(doc(db, "blogs", id), {
        ...form,
        tags: form.tags
          ? form.tags.split(",").map((t) => t.trim())
          : [],
        updatedAt: new Date(),
      });

      router.push("/admin-dashboard/blogs");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Something went wrong");
    }

    setSaving(false);
  };

  // ⏳ Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-gray-400">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white p-6">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">

        <h1 className="text-3xl font-bold mb-8">
          Edit Blog ✏️
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <Input label="Title" value={form.title}
            onChange={(v:any)=>setForm({...form,title:v})}/>

          <Input label="Category" value={form.category}
            onChange={(v:any)=>setForm({...form,category:v})}/>

          <Input label="Author" value={form.author}
            onChange={(v:any)=>setForm({...form,author:v})}/>

          <Input label="Read Time" value={form.readTime}
            onChange={(v:any)=>setForm({...form,readTime:v})}/>

          <div className="md:col-span-2">
            <Input label="Image URL" value={form.image}
              onChange={(v:any)=>setForm({...form,image:v})}/>
          </div>

          <div className="md:col-span-2">
            <Input label="Tags (comma separated)" value={form.tags}
              onChange={(v:any)=>setForm({...form,tags:v})}/>
          </div>
        </div>

        {/* Image Preview */}
        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="mt-6 rounded-2xl max-h-72 w-full object-cover border border-white/10"
          />
        )}

        {/* Excerpt */}
        <Textarea label="Excerpt"
          value={form.excerpt}
          onChange={(v:any)=>setForm({...form,excerpt:v})}/>

        {/* Content */}
        <Textarea label="Content"
          value={form.content}
          rows={8}
          onChange={(v:any)=>setForm({...form,content:v})}/>

        {/* Button */}
        <button
          onClick={updateBlog}
          disabled={saving}
          className="mt-8 w-full py-4 rounded-2xl font-semibold text-lg
          bg-gradient-to-r from-blue-500 to-purple-600
          hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30
          transition-all duration-300"
        >
          {saving ? "Updating..." : "Update Blog 🚀"}
        </button>

      </div>
    </div>
  );
}

/* 🔹 Reusable Components */

function Input({ label, value, onChange }: any) {
  return (
    <div>
      <p className="text-sm text-gray-300 mb-1">{label}</p>
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-xl bg-white/10 border border-white/10 
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}

function Textarea({ label, value, onChange, rows = 3 }: any) {
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-300 mb-1">{label}</p>
      <textarea
        rows={rows}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-xl bg-white/10 border border-white/10 
        focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
    </div>
  );
}
