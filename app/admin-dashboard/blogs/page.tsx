"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function BlogList() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchBlogs = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "blogs"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: string) => {
    if (!confirm("Delete this blog?")) return;

    await deleteDoc(doc(db, "blogs", id));
    setBlogs((prev) => prev.filter((b) => b.id !== id)); // faster UI update
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Manage Blogs
        </h1>

        <button
          onClick={() => router.push("/admin-dashboard/blogs/new")}
          className="px-6 py-3 rounded-xl font-medium
          bg-gradient-to-r from-blue-500 to-purple-600
          hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
          transition-all"
        >
          + Create Blog
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-400 mt-20">
          Loading blogs...
        </div>
      )}

      {/* Empty */}
      {!loading && blogs.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          No blogs yet 🚀
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="backdrop-blur-xl bg-white/5 border border-white/10 
            rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
            hover:shadow-purple-500/10 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            {blog.image && (
              <img
                src={blog.image}
                className="h-48 w-full object-cover"
              />
            )}

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-gray-400 text-sm line-clamp-3">
                {blog.excerpt || "No description available"}
              </p>

              {/* Tags */}
              {blog.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {blog.tags.slice(0, 3).map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-lg bg-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    router.push(`/admin-dashboard/blogs/edit/${blog.id}`)
                  }
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="text-red-400 hover:text-red-300 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}