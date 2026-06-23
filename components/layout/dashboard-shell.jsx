"use client";

import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { SidebarProvider, useSidebar } from "./sidebar-context";

function ShellContent({ children }) {
  const { collapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col min-w-0 w-full transition-[margin] duration-300 ${
          collapsed ? "lg:ml-0" : "lg:ml-0"
        }`}
      >
        <Header />
        <main className="flex-1 p-4 sm:p-5 lg:p-6 overflow-x-hidden overflow-y-auto w-full min-w-0">
          <div className="w-full max-w-full min-w-0">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function DashboardShell({ children }) {
  return (
    <SidebarProvider>
      <ShellContent>{children}</ShellContent>
    </SidebarProvider>
  );
}
