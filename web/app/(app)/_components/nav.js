"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "@/lib/finance-store";
import { navigation } from "@/messages/pt-PT/common";

export default function NavBar() {
  const pathname = usePathname();
  const { activeProfileName, buildHref, clearActiveProfile } = useAppState();

  return (
    <div className="border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4 text-xs md:px-10">
        {activeProfileName ? (
          <button
            type="button"
            onClick={clearActiveProfile}
            className="rounded-full border border-emerald-200/70 bg-emerald-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:-translate-y-0.5"
          >
            {navigation.profilePrefix}: {activeProfileName} ({navigation.clearLabel})
          </button>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          {navigation.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={buildHref(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:bg-white ${
                  isActive
                    ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-800"
                    : "border-black/10 bg-white/80 text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
