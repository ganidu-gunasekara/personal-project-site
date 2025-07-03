"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Toaster } from "sonner";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-full flex flex-col lg:flex-row bg-zinc-100">
      <Toaster position="top-right" richColors />
      {/* Mobile Topbar */}
      <div className="lg:hidden flex items-center justify-between bg-zinc-950 text-white p-4">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-zinc-950 text-white p-6 space-y-4 fixed lg:static z-50 top-[60px] h-full overflow-y-auto`}
      >
        <nav className="space-y-1 text-sm font-medium">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <Package className="w-4 h-4" />
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Orders
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 mt-[60px] lg:mt-0">{children}</main>
    </div>
  );
}
