"use client";

import Link from "next/link";
import { routes } from "@/config/routes.mjs";
import { useAppState } from "@/lib/finance-store";
import { budgetOptions, dashboardCopy, steps } from "../data";

export default function DashboardClient() {
  const {
    activeProfileName,
    activeProfileSnapshot,
    setActiveProfile,
    buildHref,
  } = useAppState();

  const summaryCards = [
    {
      label: dashboardCopy.summaryCards.spent,
      value: activeProfileSnapshot.totalSpentLabel,
      helper: activeProfileSnapshot.monthLabel,
    },
    {
      label: dashboardCopy.summaryCards.budget,
      value: activeProfileSnapshot.totalBudgetLabel,
      helper: `${activeProfileSnapshot.categoryBreakdown.length} categorias`,
    },
    {
      label: dashboardCopy.summaryCards.margin,
      value: activeProfileSnapshot.remainingIncomeLabel,
      helper: `${activeProfileSnapshot.fixedSpentLabel} fixas · ${activeProfileSnapshot.variableSpentLabel} variáveis`,
    },
    {
      label: dashboardCopy.summaryCards.topCategory,
      value: activeProfileSnapshot.topCategory?.category || dashboardCopy.noTopCategory,
      helper: activeProfileSnapshot.topCategory
        ? `${activeProfileSnapshot.topCategory.spentLabel} · ${activeProfileSnapshot.topCategory.progressLabel} do limite`
        : dashboardCopy.emptyStateDescription,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,111,104,0.15),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(255,214,165,0.25),transparent_35%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 md:px-10">
        <section className="rounded-3xl border border-black/10 bg-white/85 p-8 shadow-xl shadow-black/5 backdrop-blur">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                {dashboardCopy.badge}
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl font-[var(--font-display)]">
                {dashboardCopy.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                {dashboardCopy.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={buildHref(routes.despesas.adicionar)}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f6f68] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0c5c57]"
                >
                  {dashboardCopy.primaryActionLabel}
                </Link>
                <Link
                  href={buildHref(routes.despesas.lista)}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
                >
                  {dashboardCopy.secondaryActionLabel}
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 px-4 py-3 text-right text-sm text-emerald-800">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {dashboardCopy.activeProfileLabel}
              </p>
              <p className="mt-1 text-lg font-semibold">
                {activeProfileName || dashboardCopy.noProfileSelected}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
                {dashboardCopy.summaryTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {dashboardCopy.summaryDescription}
              </p>
            </div>
            {activeProfileName ? (
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {activeProfileSnapshot.monthLabel}
              </span>
            ) : null}
          </div>
          {activeProfileName ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {summaryCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {card.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.helper}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-3xl border border-dashed border-black/10 bg-white/80 p-6 text-sm text-slate-600">
              <p className="text-lg font-semibold text-slate-900">
                {dashboardCopy.emptyStateTitle}
              </p>
              <p className="mt-2 max-w-2xl leading-relaxed">
                {dashboardCopy.emptyStateDescription}
              </p>
            </div>
          )}
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
              {dashboardCopy.coreActionsTitle}
            </h2>
            <p className="text-sm text-slate-500">
              {dashboardCopy.coreActionsDescription}
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dashboardCopy.coreActions.map((action) => (
              <div
                key={action.title}
                className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {action.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {action.description}
                </p>
                <Link
                  href={buildHref(action.href)}
                  className="mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:-translate-y-0.5"
                >
                  {action.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
            {dashboardCopy.profileSectionTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {dashboardCopy.profileSectionDescription}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {budgetOptions.map((option) => {
              const isActive = activeProfileName === option.title;

              return (
                <button
                  type="button"
                  key={option.title}
                  onClick={() =>
                    setActiveProfile(isActive ? null : option.title)
                  }
                  aria-pressed={isActive}
                  className={`rounded-3xl border bg-white/85 p-5 text-left shadow-md shadow-black/5 transition hover:-translate-y-0.5 ${
                    isActive
                      ? "border-emerald-300 ring-2 ring-emerald-300/60"
                      : "border-black/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <div
                        className="absolute -left-1 -top-1 h-10 w-10 rounded-2xl"
                        style={{ backgroundColor: option.sticker }}
                      />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f6f68] text-white">
                        {option.icon}
                      </div>
                    </div>
                    <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {option.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {option.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
                {dashboardCopy.insightsTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {dashboardCopy.insightsDescription}
              </p>
            </div>
          </div>
          {activeProfileName ? (
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4">
                <div className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {dashboardCopy.alertsTitle}
                  </p>
                  <div className="mt-4 space-y-3">
                    {activeProfileSnapshot.alertCategories.length > 0 ? (
                      activeProfileSnapshot.alertCategories.map((entry) => (
                        <div
                          key={entry.category}
                          className={`rounded-2xl border px-4 py-3 ${
                            entry.status === "critical"
                              ? "border-rose-200 bg-rose-50/80 text-rose-800"
                              : "border-amber-200 bg-amber-50/80 text-amber-800"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold">
                              {entry.category}
                            </p>
                            <span className="rounded-full border border-current/10 bg-white/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">
                              {entry.progressLabel}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed">
                            {entry.spentLabel} gastos para um limite de{" "}
                            {entry.limitLabel}.
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-600">
                        {dashboardCopy.alertsFallback}
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {dashboardCopy.categoryBreakdownTitle}
                  </p>
                  <div className="mt-4 space-y-3">
                    {activeProfileSnapshot.categoryBreakdown
                      .slice(0, 4)
                      .map((entry) => (
                        <div key={entry.category}>
                          <div className="flex items-center justify-between gap-3 text-sm">
                            <p className="font-semibold text-slate-800">
                              {entry.category}
                            </p>
                            <p className="text-slate-500">
                              {entry.spentLabel} / {entry.limitLabel}
                            </p>
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-slate-100">
                            <div
                              className={`h-2 rounded-full ${
                                entry.status === "critical"
                                  ? "bg-rose-500"
                                  : entry.status === "warning"
                                    ? "bg-amber-500"
                                    : "bg-emerald-500"
                              }`}
                              style={{
                                width: `${Math.min(entry.progress * 100, 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {dashboardCopy.latestExpensesTitle}
                  </p>
                  <div className="mt-4 space-y-3">
                    {activeProfileSnapshot.latestExpenses.length > 0 ? (
                      activeProfileSnapshot.latestExpenses
                        .slice(0, 5)
                        .map((expense) => (
                          <div
                            key={expense.id}
                            className="flex items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3"
                          >
                            <div>
                              <p className="text-sm font-semibold text-slate-800">
                                {expense.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {expense.category} · {expense.dateLabel}
                              </p>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">
                              {expense.amountLabel}
                            </span>
                          </div>
                        ))
                    ) : (
                      <p className="text-sm text-slate-600">
                        {dashboardCopy.latestExpensesEmpty}
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {dashboardCopy.insightsTitle}
                  </p>
                  <div className="mt-4 space-y-3">
                    {activeProfileSnapshot.insights.map((insight) => (
                      <div
                        key={insight}
                        className="rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm leading-relaxed text-slate-600"
                      >
                        {insight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-3xl border border-dashed border-black/10 bg-white/80 p-6 text-sm text-slate-600">
              <p className="max-w-2xl leading-relaxed">
                {dashboardCopy.emptyStateDescription}
              </p>
            </div>
          )}
        </section>

        <section className="mt-10 pb-12">
          <h2 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
            {dashboardCopy.quickStartTitle}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f6f68] text-white">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {dashboardCopy.stepLabelPrefix} 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
