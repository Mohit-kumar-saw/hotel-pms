"use client";

import { Bell, Menu, MessageSquare, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SearchInput } from "@/components/ui/input";
import { findNavTitleByHref } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import { useSidebar } from "./sidebar-context";

export function Header() {
  const pathname = usePathname();
  const { collapsed, toggleCollapsed, toggleMobile } = useSidebar();
  const title = findNavTitleByHref(pathname) || (pathname === "/dashboard" ? "Dashboard" : "Hostay PMS");

  return (
    <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <button
          type="button"
          onClick={toggleMobile}
          className="lg:hidden p-2 rounded-xl text-muted hover:text-foreground hover:bg-white border border-transparent hover:border-border transition-colors shrink-0"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={toggleCollapsed}
          className="hidden lg:flex p-2 rounded-xl text-muted hover:text-foreground hover:bg-white border border-transparent hover:border-border transition-colors shrink-0"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </button>

        <h1 className="text-lg sm:text-xl font-bold text-foreground truncate min-w-0">{title}</h1>

        <div className="flex-1 max-w-md hidden md:block mx-2">
          <SearchInput placeholder="Search booking, room, etc." />
        </div>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-auto">
          <button
            type="button"
            className="relative p-2 rounded-xl text-muted hover:text-foreground hover:bg-white transition-colors"
            aria-label="Messages"
          >
            <MessageSquare className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative p-2 rounded-xl text-muted hover:text-foreground hover:bg-white transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
          </button>
          <div className="flex items-center gap-2 sm:gap-2.5 pl-1 sm:pl-2 sm:border-l sm:border-border">
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-semibold shadow-md shadow-primary/20">
              ZG
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">Zain George</p>
              <p className="text-xs text-muted">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
