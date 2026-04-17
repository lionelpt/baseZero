"use client";

import { useAppState } from "@/lib/finance-store";
import { planeamentoCopy } from "@/messages/pt-PT/planeamento";
import ProfileRequiredState from "../../profile-state";
import WindowShell from "../../_components/window-shell";

export default function PlaneamentoBudget() {
  const copy = planeamentoCopy.orcamento;
  const { activeProfileName, activeProfileSnapshot, updateBudgetLimit } =
    useAppState();
  const quickAdjustments = activeProfileSnapshot.categoryBreakdown
    .slice(0, 3)
    .map((entry) => ({
      label:
        entry.limit > 0
          ? `${entry.category} + 25`
          : `Criar limite em ${entry.category}`,
      onClick: () =>
        updateBudgetLimit(
          activeProfileName,
          entry.category,
          Math.max(entry.limit, entry.spent) + 25
        ),
    }));

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
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {activeProfileSnapshot.categoryBreakdown.map((item) => (
            <div
              key={item.category}
              data-testid={`budget-card-${item.category}`}
              className="rounded-2xl border border-black/5 bg-white px-4 py-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-800">
                  {item.category}
                </p>
                <div className="text-right text-xs text-slate-500">
                  <p>{copy.spentLabel}: {item.spentLabel}</p>
                  <p>{copy.remainingLabel}: {item.remainingLabel}</p>
                </div>
              </div>
              <label className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {copy.limitFieldLabel}
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.limit}
                  onChange={(event) =>
                    updateBudgetLimit(
                      activeProfileName,
                      item.category,
                      event.target.value
                    )
                  }
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
                />
              </label>
              <div className="mt-3 h-2 rounded-full bg-slate-100">
                <div
                  className={`h-2 rounded-full ${
                    item.status === "critical"
                      ? "bg-rose-500"
                      : item.status === "warning"
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                  }`}
                  style={{ width: `${Math.min(item.progress * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.goalsLabel}
            </p>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              {activeProfileSnapshot.insights.map((goal) => (
                <p key={goal}>{goal}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.quickAdjustmentsLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {quickAdjustments.map((adjustment) => (
                <button
                  key={adjustment.label}
                  type="button"
                  onClick={adjustment.onClick}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:-translate-y-0.5"
                >
                  {adjustment.label}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.monthlyIncomeLabel}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {activeProfileSnapshot.monthlyIncomeLabel}
            </p>
            <p className="text-xs text-slate-500">
              {copy.remainingLabel} após {activeProfileSnapshot.totalSpentLabel} gastos.
            </p>
          </div>
        </div>
        </div>
      )}
    </WindowShell>
  );
}
