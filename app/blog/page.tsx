// app/blog/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content.slice(0,100)}...</p>

          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}