// app/blog/[slug]/page.tsx
"use client";

import { use, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function BlogDetail({ params }: any) {
  // ✅ unwrap params (IMPORTANT)
  const { slug } = use(params);

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));

      const found = snapshot.docs.find(
        (doc) => doc.data().slug === slug
      );

      if (found) {
        setBlog({ id: found.id, ...found.data() });
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}