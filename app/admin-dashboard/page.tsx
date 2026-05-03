"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  // ✅ Auth check
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      router.replace("/admin-login"); // better than push
    } else {
      setChecking(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.replace("/admin-login");
  };

  // ✅ Prevent flicker
  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Checking access...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-blue-600">
            Admin Panel
          </h2>

          <nav className="space-y-4">
            <button
              onClick={() => router.push("/admin-dashboard")}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Dashboard
            </button>

            <button
              onClick={() => router.push("/admin-dashboard/blogs")}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Manage Blogs
            </button>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-600">Total Blogs</h2>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-600">Draft Blogs</h2>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-gray-600">Published</h2>
            <p className="text-3xl font-bold mt-2">9</p>
          </div>

        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

          <div className="flex gap-4">
            <button
              onClick={() => router.push("/admin-dashboard/blogs")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              Go to Blogs
            </button>

            <button
              onClick={() => router.push("/admin-dashboard/blogs/new")}
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Create Blog
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}