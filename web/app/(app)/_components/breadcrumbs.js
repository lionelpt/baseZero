"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppState } from "@/lib/finance-store";
import { breadcrumbs } from "@/messages/pt-PT/common";

const formatSegment = (segment) =>
  breadcrumbs.segmentLabels[segment] || segment.replace(/-/g, " ");

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { activeProfileName, buildHref } = useAppState();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      label: formatSegment(segment),
      href: buildHref(href),
      isLast: index === segments.length - 1,
    };
  });

  return (
    <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 pt-6 text-xs md:px-10">
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {crumbs.map((crumb, index) => (
          <span key={crumb.href} className="flex items-center gap-2">
            {crumb.isLast ? (
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-slate-600">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-slate-500 transition hover:-translate-y-0.5 hover:bg-white"
              >
                {crumb.label}
              </Link>
            )}
            {index < crumbs.length - 1 ? (
              <span className="text-slate-300">/</span>
            ) : null}
          </span>
        ))}
      </div>
      {activeProfileName ? (
        <span className="rounded-full border border-emerald-200/70 bg-emerald-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
          {breadcrumbs.activeProfilePrefix}: {activeProfileName}
        </span>
      ) : null}
    </div>
  );
}
