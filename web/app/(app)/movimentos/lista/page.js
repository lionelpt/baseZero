"use client";

import Link from "next/link";
import { useState } from "react";
import { routes } from "@/config/routes.mjs";
import { useAppState } from "@/lib/finance-store";
import {
  buildProfileSummary,
  buildSummaryFilename,
} from "@/lib/profile-summary";
import { despesasCopy } from "@/messages/pt-PT/despesas";
import ProfileRequiredState from "../../profile-state";
import WindowShell from "../../_components/window-shell";

export default function DespesasList() {
  const copy = despesasCopy.list;
  const { activeProfileName, activeProfile, activeProfileSnapshot, buildHref } =
    useAppState();
  const [activeFilter, setActiveFilter] = useState(copy.filters[0]);
  const [summaryState, setSummaryState] = useState(null);

  const filteredExpenses = activeProfileSnapshot.latestExpenses.filter((expense) => {
    if (activeFilter === copy.filters[1]) {
      return expense.kind === "fixed";
    }

    if (activeFilter === copy.filters[2]) {
      return expense.kind === "variable";
    }

    if (activeFilter === copy.filters[3]) {
      return activeProfileSnapshot.alertCategoryNames.includes(expense.category);
    }

    return true;
  });

  const summaryText = buildProfileSummary({
    profileName: activeProfileName,
    profile: activeProfile,
    snapshot: activeProfileSnapshot,
  });

  const triggerDownload = () => {
    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = href;
    link.download = buildSummaryFilename(activeProfileName);
    link.click();
    URL.revokeObjectURL(href);
  };

  const generateSummary = async () => {
    if (!summaryText) {
      return;
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(summaryText);
        setSummaryState({
          tone: "success",
          message: copy.exportCard.successLabel,
          preview: summaryText,
        });
        return;
      } catch {}
    }

    setSummaryState({
      tone: "neutral",
      message: copy.exportCard.fallbackLabel,
      preview: summaryText,
    });
  };

  const downloadSummary = () => {
    if (!summaryText) {
      return;
    }

    triggerDownload();
    setSummaryState({
      tone: "success",
      message: copy.exportCard.downloadSuccessLabel,
      preview: summaryText,
    });
  };

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
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {copy.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 ${
                  activeFilter === filter
                    ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-800"
                    : "border-black/10 bg-white text-slate-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((item) => (
                <Link
                  key={item.id}
                  href={buildHref(`${routes.despesas.editar}?id=${item.id}`)}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {item.category} · {item.dateLabel} ·{" "}
                      {copy.kinds[item.kind]}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-semibold text-slate-700">
                      {item.amountLabel}
                    </span>
                    <span className="mt-1 inline-flex rounded-full border border-black/10 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {copy.editAction}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-black/10 bg-white px-4 py-6 text-sm text-slate-600">
                {copy.emptyLabel}
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.totalCard.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {activeProfileSnapshot.totalSpentLabel}
            </p>
            <p className="text-xs text-slate-500">
              {activeProfileSnapshot.remainingIncome >= 0
                ? `Margem atual ${activeProfileSnapshot.remainingIncomeLabel}.`
                : `Acima do rendimento em ${activeProfileSnapshot.overIncomeLabel}.`}
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.alertCard.label}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {activeProfileSnapshot.primaryAlert
                ? `${activeProfileSnapshot.primaryAlert.category} está em ${activeProfileSnapshot.primaryAlert.progressLabel} do limite (${activeProfileSnapshot.primaryAlert.spentLabel} de ${activeProfileSnapshot.primaryAlert.limitLabel}).`
                : copy.alertCard.fallback}
            </p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{
                  width: `${Math.min(
                    (activeProfileSnapshot.primaryAlert?.progress || 0) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.exportCard.label}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {copy.exportCard.body}
            </p>
            <button
              type="button"
              onClick={generateSummary}
              className="mt-3 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
            >
              {copy.exportCard.action}
            </button>
            <button
              type="button"
              onClick={downloadSummary}
              className="mt-3 ml-2 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
            >
              {copy.exportCard.downloadAction}
            </button>
            {summaryState ? (
              <>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    summaryState.tone === "success"
                      ? "text-emerald-700"
                      : "text-slate-600"
                  }`}
                >
                  {summaryState.message}
                </p>
                <pre className="mt-3 overflow-auto rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">
                  {summaryState.preview}
                </pre>
              </>
            ) : null}
          </div>
        </div>
        </div>
      )}
    </WindowShell>
  );
}
