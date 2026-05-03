"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* Blog Type */
type Blog = {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  image?: string;
  category?: string;
  tags?: string[];
  readTime?: string;
  slug: string;
  createdAt?: any;
};

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const q = query(
          collection(db, "blogs"),
          orderBy("createdAt", "desc"),
          limit(3)
        );

        const snapshot = await getDocs(q);

        const data: Blog[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Blog, "id">),
        }));

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-400 py-10">
        Loading latest blogs...
      </p>
    );
  }

  if (blogs.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10">
        No blogs found 🚀
      </p>
    );
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#020617] to-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Latest Blogs 🔥
          </h2>
          <p className="text-gray-400 mt-2">
            Stay updated with our newest insights
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>

                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.03] transition duration-300 h-full flex flex-col">

                  {/* Image */}
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
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
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[3rem]">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm line-clamp-3 min-h-[4.5rem]">
                      {blog.excerpt || blog.content?.slice(0, 100)}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-4 flex justify-between items-center">

                      <span className="text-xs text-gray-500">
                        {blog.readTime || "5 min read"}
                      </span>

                      <span className="text-sm font-medium text-blue-400">
                        Read →
                      </span>

                    </div>

                  </div>
                </div>

              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}