"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-white px-6 py-10">

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Explore Blogs ✨
        </h1>
        <p className="text-gray-400 mt-3">
          Discover insights, ideas and stories that matter
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-400">Loading blogs...</p>
      )}

      {/* Empty */}
      {!loading && blogs.length === 0 && (
        <p className="text-center text-gray-400">
          No blogs available yet 🚀
        </p>
      )}

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden 
            hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col"
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

              {/* Category */}
              {blog.category && (
                <span className="text-xs text-blue-400 mb-2">
                  {blog.category}
                </span>
              )}

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm line-clamp-3">
                {blog.excerpt || blog.content?.slice(0, 120)}
              </p>

              {/* Tags */}
              {blog.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {blog.tags.slice(0, 3).map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/10 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto pt-4">
                <span className="text-xs text-gray-500">
                  {blog.readTime || "5 min read"}
                </span>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Read →
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}