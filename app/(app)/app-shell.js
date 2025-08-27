"use client";

import NavBar from "./nav";
import Breadcrumbs from "./breadcrumbs";
import { AppStateProvider } from "@/lib/finance-store";

export default function AppShell({ children }) {
  return (
    <AppStateProvider>
      <div className="min-h-screen">
        <NavBar />
        <Breadcrumbs />
        <main>{children}</main>
      </div>
    </AppStateProvider>
  );
}
