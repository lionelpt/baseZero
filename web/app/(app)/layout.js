import { Suspense } from "react";
import AppShell from "./_components/app-shell";

export default function AppLayout({ children }) {
  return (
    <Suspense fallback={null}>
      <AppShell>{children}</AppShell>
    </Suspense>
  );
}
