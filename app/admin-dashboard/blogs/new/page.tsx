// app/admin-dashboard/blogs/new/page.tsx
"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function NewBlog() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    content: "",
    excerpt: ""
  });

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  const createBlog = async () => {
    const slug = slugify(form.title);

    await addDoc(collection(db, "blogs"), {
      ...form,
      slug,
      createdAt: new Date(),
    });

    router.push("/admin-dashboard/blogs");
  };

  return (
    <div>
      <h1>Create Blog</h1>

      <input placeholder="Title"
        onChange={(e)=>setForm({...form, title:e.target.value})} />

      <input placeholder="Excerpt"
        onChange={(e)=>setForm({...form, excerpt:e.target.value})} />

      <textarea placeholder="Content"
        onChange={(e)=>setForm({...form, content:e.target.value})} />

      <button onClick={createBlog}>Publish</button>
    </div>
  );
}