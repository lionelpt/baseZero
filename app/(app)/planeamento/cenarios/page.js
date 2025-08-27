"use client";

import Link from "next/link";
import { routes } from "@/config/routes.mjs";
import { useAppState } from "@/lib/finance-store";
import { planeamentoCopy } from "@/messages/pt-PT/planeamento";
import ProfileRequiredState from "../../profile-required-state";
import WindowShell from "../../window-shell";

export default function PlaneamentoScenarios() {
  const copy = planeamentoCopy.cenarios;
  const { activeProfileName, activeProfileSnapshot, buildHref } = useAppState();

  return (
    <WindowShell
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      badge={copy.badge}
    >
      {!activeProfileName ? (
        <ProfileRequiredState />
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {copy.baseStateLabel}
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  {activeProfileSnapshot.remainingIncomeLabel}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {activeProfileSnapshot.totalSpentLabel} gastos em{" "}
                  {activeProfileSnapshot.monthLabel}. Categoria com mais pressão:{" "}
                  {activeProfileSnapshot.topCategory?.category || "sem dados"}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildHref(routes.planeamento.orcamento)}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
                >
                  Ajustar orçamento
                </Link>
                <Link
                  href={buildHref(routes.despesas.adicionar)}
                  className="inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
                >
                  Registar despesa
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {activeProfileSnapshot.scenarios.map((scenario) => (
          <div
            key={scenario.title}
            className="rounded-2xl border border-black/5 bg-white px-4 py-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {scenario.title}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {scenario.description}
            </p>
            <span
              className={`mt-3 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                scenario.tone === "negative"
                  ? "border-rose-200 bg-rose-50 text-rose-700"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
              }`}
            >
              {copy.impactLabel} {scenario.impactLabel}
            </span>
            <p className="mt-3 text-xs text-slate-500">
              {copy.marginAfterLabel}: {scenario.marginAfterLabel}
            </p>
          </div>
            ))}
          </div>
        </div>
      )}
    </WindowShell>
  );
}
