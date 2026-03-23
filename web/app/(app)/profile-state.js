"use client";

import Link from "next/link";
import { routes } from "@/config/routes.mjs";
import { emptyProfileState } from "@/messages/pt-PT/common";
import { useAppState } from "@/lib/finance-store";

export default function ProfileRequiredState() {
  const { buildHref } = useAppState();

  return (
    <div className="rounded-3xl border border-dashed border-black/10 bg-white px-6 py-10 text-center">
      <p className="text-lg font-semibold text-slate-900">
        {emptyProfileState.title}
      </p>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
        {emptyProfileState.description}
      </p>
      <Link
        href={buildHref(routes.visao.painel)}
        className="mt-5 inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#0c5c57]"
      >
        {emptyProfileState.action}
      </Link>
    </div>
  );
}
