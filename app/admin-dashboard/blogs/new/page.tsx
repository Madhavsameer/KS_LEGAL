"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function NewBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    tags: "",
    author: "Admin",
    readTime: "",
  });

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const createBlog = async () => {
    if (!form.title || !form.content) return alert("Fill required fields");

    setLoading(true);

    await addDoc(collection(db, "blogs"), {
      ...form,
      slug: slugify(form.title),
      tags: form.tags.split(",").map((t) => t.trim()),
      createdAt: new Date(),
    });

    setLoading(false);
    router.push("/admin-dashboard/blogs");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white p-6">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Create Blog ✨
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <Input label="Title" value={form.title} onChange={(v)=>setForm({...form,title:v})}/>
          <Input label="Category" value={form.category} onChange={(v)=>setForm({...form,category:v})}/>
          <Input label="Author" value={form.author} onChange={(v)=>setForm({...form,author:v})}/>
          <Input label="Read Time" value={form.readTime} onChange={(v)=>setForm({...form,readTime:v})}/>

          <div className="md:col-span-2">
            <Input label="Cover Image URL" value={form.image} onChange={(v)=>setForm({...form,image:v})}/>
          </div>

          <div className="md:col-span-2">
            <Input label="Tags (comma separated)" value={form.tags} onChange={(v)=>setForm({...form,tags:v})}/>
          </div>
        </div>

        {/* Image Preview */}
        {form.image && (
          <div className="mt-6">
            <img
              src={form.image}
              className="rounded-2xl w-full max-h-72 object-cover border border-white/10"
            />
          </div>
        )}

        {/* Excerpt */}
        <Textarea
          label="Excerpt"
          value={form.excerpt}
          onChange={(v)=>setForm({...form,excerpt:v})}
        />

        {/* Content */}
        <Textarea
          label="Full Content"
          value={form.content}
          onChange={(v)=>setForm({...form,content:v})}
          rows={8}
        />

        {/* Button */}
        <button
          onClick={createBlog}
          disabled={loading}
          className="mt-8 w-full py-4 rounded-2xl font-semibold text-lg
          bg-gradient-to-r from-blue-500 to-purple-600 
          hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 
          transition-all duration-300"
        >
          {loading ? "Publishing..." : "Publish Blog 🚀"}
        </button>
      </div>
    </div>
  );
}

/* Reusable Components */

function Input({ label, value, onChange }: any) {
  return (
    <div>
      <p className="mb-1 text-sm text-gray-300">{label}</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-xl bg-white/10 border border-white/10 
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}

function Textarea({ label, value, onChange, rows=3 }: any) {
  return (
    <div className="mt-6">
      <p className="mb-1 text-sm text-gray-300">{label}</p>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-xl bg-white/10 border border-white/10 
        focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />
    </div>
  );
}