import { Suspense } from "react";
import AppShell from "./app-shell";

export default function AppLayout({ children }) {
  return (
    <Suspense fallback={null}>
      <AppShell>{children}</AppShell>
    </Suspense>
  );
}
