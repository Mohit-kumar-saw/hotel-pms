"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Hotel,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import { navigation } from "@/lib/navigation";
import { useSidebar } from "./sidebar-context";

function NavItem({ item, depth = 0, collapsed, onNavigate }) {
  const pathname = usePathname();
  const hasChildren = item.children?.length > 0;
  const isActive = item.href === pathname;
  const isChildActive =
    hasChildren &&
    item.children.some(
      (c) => c.href === pathname || c.children?.some((gc) => gc.href === pathname)
    );
  const [open, setOpen] = useState(isChildActive);

  const indent = collapsed ? 0 : depth * 10;

  if (hasChildren) {
    return (
      <div>
        <button
          type="button"
          onClick={() => !collapsed && setOpen(!open)}
          title={collapsed ? item.title : undefined}
          className={`group w-full flex items-center gap-2.5 rounded-xl text-sm transition-all duration-200 ${
            collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2"
          } ${
            isChildActive
              ? "text-white bg-white/10"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
          style={collapsed ? undefined : { paddingLeft: `${12 + indent}px` }}
        >
          {depth === 0 && item.icon && (
            <item.icon className={`shrink-0 ${collapsed ? "h-5 w-5" : "h-4 w-4"}`} />
          )}
          {!collapsed && (
            <>
              <span className="flex-1 text-left truncate text-[13px]">{item.title}</span>
              {open ? (
                <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-60" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
              )}
            </>
          )}
        </button>
        {!collapsed && open && (
          <div className="mt-0.5 ml-1 border-l border-white/10">
            {item.children.map((child) => (
              <NavItem
                key={child.title + (child.href ?? "")}
                item={child}
                depth={depth + 1}
                collapsed={collapsed}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      title={collapsed ? item.title : undefined}
      className={`group flex items-center gap-2.5 rounded-xl text-sm transition-all duration-200 ${
        collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2"
      } ${
        isActive
          ? "bg-primary text-white font-medium shadow-lg shadow-primary/25"
          : "text-slate-400 hover:text-white hover:bg-white/5"
      }`}
      style={collapsed ? undefined : { paddingLeft: `${12 + indent}px` }}
    >
      {depth === 0 && item.icon && (
        <item.icon className={`shrink-0 ${collapsed ? "h-5 w-5" : "h-4 w-4"}`} />
      )}
      {!collapsed && <span className="truncate text-[13px]">{item.title}</span>}
    </Link>
  );
}

export function Sidebar() {
  const { collapsed, mobileOpen, toggleCollapsed, closeMobile } = useSidebar();

  const sidebarContent = (
    <>
      <div
        className={`flex items-center border-b border-white/10 shrink-0 ${
          collapsed ? "justify-center px-3 py-4" : "gap-3 px-4 py-5"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/30 shrink-0">
          <Hotel className="h-5 w-5 text-white" />
        </div>
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="text-white font-bold text-lg leading-tight tracking-tight">Hostay</p>
            <p className="text-slate-500 text-xs">Hotel PMS</p>
          </div>
        )}
        {mobileOpen && (
          <button
            type="button"
            onClick={closeMobile}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-0.5 sidebar-scroll">
        {navigation.map((item) => (
          <NavItem
            key={item.title}
            item={item}
            collapsed={collapsed}
            onNavigate={closeMobile}
          />
        ))}
      </nav>

      <div className={`border-t border-white/10 p-2 shrink-0 ${collapsed ? "flex justify-center" : ""}`}>
        <button
          type="button"
          onClick={toggleCollapsed}
          className={`hidden lg:flex items-center gap-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors ${
            collapsed ? "p-2.5" : "w-full px-3 py-2.5 text-sm"
          }`}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <>
              <PanelLeftClose className="h-4 w-4 shrink-0" />
              <span className="text-[13px]">Collapse</span>
            </>
          )}
        </button>
      </div>
    </>
  );

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeMobile}
          aria-hidden
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 z-50 h-screen flex flex-col overflow-hidden
          bg-gradient-to-b from-[#0c1222] via-[#111827] to-[#0f172a]
          border-r border-white/5 shadow-xl shadow-black/20
          transition-[width,transform] duration-300 ease-in-out
          ${collapsed ? "w-[72px]" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
