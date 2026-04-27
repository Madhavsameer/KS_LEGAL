// app/admin-dashboard/blogs/page.tsx
"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function BlogList() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();

  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: string) => {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
  };

  return (
    <div>
      <h1>Manage Blogs</h1>

      <button onClick={() => router.push("/admin-dashboard/blogs/new")}>
        + Add Blog
      </button>

      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>

          <button onClick={() => router.push(`/admin-dashboard/blogs/edit/${blog.id}`)}>
            Edit
          </button>

          <button onClick={() => deleteBlog(blog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}