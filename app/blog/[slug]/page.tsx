"use client";

import { use, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function BlogDetail({ params }: any) {
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

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 bg-black">
        Loading article...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-black text-white px-4 md:px-6 py-10">

      {/* Container */}
      <div className="max-w-3xl mx-auto">

        {/* Category */}
        {blog.category && (
          <p className="text-blue-400 text-sm mb-3">
            {blog.category}
          </p>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <span>{blog.author || "Admin"}</span>
          <span>•</span>
          <span>{blog.readTime || "5 min read"}</span>
        </div>

        {/* Cover Image */}
        {blog.image && (
          <img
            src={blog.image}
            className="w-full rounded-2xl mb-8 max-h-[400px] object-cover"
          />
        )}

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-lg text-gray-300 mb-8 border-l-4 border-blue-500 pl-4 italic">
            {blog.excerpt}
          </p>
        )}

        {/* Content */}
        <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed">
          {blog.content}
        </div>

        {/* Tags */}
        {blog.tags && (
          <div className="mt-10 flex flex-wrap gap-3">
            {blog.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="bg-white/10 px-3 py-1 rounded-lg text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            Thanks for reading 🙌
          </p>
        </div>
      </div>
    </div>
  );
}