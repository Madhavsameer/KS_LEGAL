// app/admin-dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin-login");
    }
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={() => router.push("/admin-dashboard/blogs")}>
        Manage Blogs
      </button>
    </div>
  );
}