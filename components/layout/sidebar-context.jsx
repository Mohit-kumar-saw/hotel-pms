"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hostay-sidebar-collapsed");
    if (saved !== null) setCollapsed(saved === "true");
  }, []);

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("hostay-sidebar-collapsed", String(next));
      return next;
    });
  };

  const closeMobile = () => setMobileOpen(false);
  const openMobile = () => setMobileOpen(true);
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ collapsed, mobileOpen, toggleCollapsed, closeMobile, openMobile, toggleMobile }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}
