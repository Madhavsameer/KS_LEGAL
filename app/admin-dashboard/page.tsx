"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  FileText,
  PlusSquare,
  LogOut,
  Search,
  Bell,
  Sparkles,
  TrendingUp,
  PenSquare,
  Eye,
  Menu,
  X,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const isAdmin = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isAdmin="));

    if (!isAdmin) {
      router.push("/admin-login");
    } else {
      setAuthorized(true);
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    document.cookie = "isAdmin=; Path=/; Max-Age=0";
    router.push("/admin-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1c] text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-white/70">
          <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
          Loading dashboard...
        </div>
      </div>
    );
  }

  if (!authorized) return null;

  const stats = [
    {
      title: "Total Blogs",
      value: "12",
      change: "+18%",
      subtitle: "vs last month",
      icon: FileText,
      accent: "from-cyan-500 to-blue-500",
    },
    {
      title: "Draft Blogs",
      value: "3",
      change: "+2",
      subtitle: "needs review",
      icon: PenSquare,
      accent: "from-amber-400 to-orange-500",
    },
    {
      title: "Published",
      value: "9",
      change: "+11%",
      subtitle: "live content growth",
      icon: Eye,
      accent: "from-emerald-400 to-teal-500",
    },
    {
      title: "Engagement",
      value: "84%",
      change: "+6.4%",
      subtitle: "reader activity",
      icon: TrendingUp,
      accent: "from-fuchsia-500 to-violet-500",
    },
  ];

  const recentActivity = [
    { title: "How AI is Changing Content", status: "Published", time: "2h ago" },
    { title: "Startup SEO Checklist", status: "Draft", time: "5h ago" },
    { title: "Future of Remote Work", status: "Review", time: "1d ago" },
    { title: "Design Systems in 2026", status: "Published", time: "2d ago" },
  ];

  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      onClick: () => router.push("/admin-dashboard"),
      active: true,
    },
    {
      label: "Manage Blogs",
      icon: FileText,
      onClick: () => router.push("/admin-dashboard/blogs"),
    },
    {
      label: "Create Blog",
      icon: PlusSquare,
      onClick: () => router.push("/admin-dashboard/blogs/new"),
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#06111f] text-white">
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[25%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="relative grid h-full grid-cols-1 lg:grid-cols-[280px_1fr]">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed left-0 top-0 z-50 h-full w-[280px] transform border-r border-white/10
            bg-white/10 backdrop-blur-2xl transition-transform duration-300
            lg:static lg:z-auto lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex h-full flex-col p-5">
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/25">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-wide">
                      Admin Studio
                    </h2>
                    <p className="text-xs text-white/60">Control center</p>
                  </div>
                </div>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="rounded-xl p-2 text-white/70 hover:bg-white/10 lg:hidden"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.onClick}
                      className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        item.active
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-400/20 shadow-lg shadow-cyan-500/10"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="mt-auto">
              <div className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Active mode
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Content management and analytics overview.
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <div className="flex min-h-0 flex-col">
          {/* Top Bar */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#081120]/70 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div>
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Dashboard Overview
                  </h1>
                  <p className="text-sm text-white/50">
                    Welcome back, admin. Here’s your latest content snapshot.
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white/60">
                  <Search className="h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="bg-transparent text-sm outline-none placeholder:text-white/35"
                  />
                </div>

                <button className="relative rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80 hover:bg-white/10">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                </button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold">
                    A
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Admin</p>
                    <p className="text-white/50">Super user</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Scrollable Main */}
          <main className="min-h-0 flex-1 overflow-y-auto px-4 py-6 md:px-6 lg:px-8">
            {/* Hero Banner */}
            <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-cyan-950/20 md:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Modern admin workspace
                  </span>
                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
                    Manage content, monitor growth, and publish faster.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-white/60 md:text-base">
                    A premium control panel with fast actions, beautiful metrics,
                    and cleaner publishing workflows.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => router.push("/admin-dashboard/blogs/new")}
                    className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                  >
                    Create New Blog
                  </button>
                  <button
                    onClick={() => router.push("/admin-dashboard/blogs")}
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Open Blog Manager
                  </button>
                </div>
              </div>
            </section>

            {/* Stat Cards */}
            <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="group rounded-[26px] border border-white/10 bg-white/8 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-black/20"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-white/55">{stat.title}</p>
                        <p className="mt-3 text-3xl font-semibold tracking-tight">
                          {stat.value}
                        </p>
                      </div>

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} shadow-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-emerald-300">
                        {stat.change}
                      </span>
                      <span className="text-white/45">{stat.subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Lower Grid */}
            <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.9fr]">
              {/* Insights Panel */}
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Performance Insights</h3>
                    <p className="mt-1 text-sm text-white/50">
                      Weekly content activity and publishing momentum.
                    </p>
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    Updated now
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-7 items-end gap-3 h-64">
                  {[35, 55, 48, 72, 68, 88, 76].map((height, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                      <div className="relative flex h-52 w-full items-end">
                        <div className="w-full rounded-t-2xl bg-white/5">
                          <div
                            className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 via-blue-500 to-fuchsia-500 shadow-lg shadow-cyan-500/20"
                            style={{ height: `${height * 2}px` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-white/40">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Panel */}
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Recent Activity</h3>
                    <p className="mt-1 text-sm text-white/50">
                      Latest content updates from your workspace.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {recentActivity.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-white/45">{item.time}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "Published"
                            ? "bg-emerald-400/10 text-emerald-300"
                            : item.status === "Draft"
                            ? "bg-amber-400/10 text-amber-300"
                            : "bg-violet-400/10 text-violet-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => router.push("/admin-dashboard/blogs")}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    View All Blogs
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
