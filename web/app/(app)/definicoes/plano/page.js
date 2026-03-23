"use client";

import { useState } from "react";
import { useAppState } from "@/lib/finance-store";
import {
  buildProfileSummary,
  buildSummaryFilename,
} from "@/lib/profile-summary";
import { definicoesCopy } from "@/messages/pt-PT/definicoes";
import ProfileRequiredState from "../../profile-required-state";
import WindowShell from "../../window-shell";

function triggerSummaryDownload(profileName, summaryText) {
  const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = href;
  link.download = buildSummaryFilename(profileName);
  link.click();
  URL.revokeObjectURL(href);
}

export default function SettingsPlan() {
  const copy = definicoesCopy.plano;
  const {
    activeProfileName,
    activeProfile,
    activeProfileSnapshot,
    updateProfilePlan,
    resetProfile,
    resetAllData,
  } = useAppState();
  const [feedback, setFeedback] = useState(null);

  if (!activeProfileName) {
    return (
      <WindowShell
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        badge={copy.badge}
      >
        <ProfileRequiredState />
      </WindowShell>
    );
  }

  const activePlan = activeProfile.details.plan;
  const summaryText = buildProfileSummary({
    profileName: activeProfileName,
    profile: activeProfile,
    snapshot: activeProfileSnapshot,
  });

  const setMessage = (tone, message) => {
    setFeedback({
      tone,
      message,
    });
  };

  const selectPlan = (planTitle) => {
    updateProfilePlan(activeProfileName, planTitle);
    setMessage("success", `${copy.planChangeSuccessPrefix} ${planTitle}.`);
  };

  const copySummary = async () => {
    if (!summaryText) {
      return;
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(summaryText);
        setMessage("success", copy.exportSuccessLabel);
        return;
      } catch {}
    }

    setMessage("neutral", copy.exportFallbackLabel);
  };

  const downloadSummary = () => {
    if (!summaryText) {
      return;
    }

    triggerSummaryDownload(activeProfileName, summaryText);
    setMessage("success", copy.exportDownloadSuccessLabel);
  };

  const handleResetProfile = () => {
    if (!window.confirm(copy.resetProfileConfirm)) {
      return;
    }

    resetProfile(activeProfileName);
    setMessage("success", copy.resetProfileSuccessLabel);
  };

  const handleResetAll = () => {
    if (!window.confirm(copy.resetAllConfirm)) {
      return;
    }

    resetAllData();
    setMessage("success", copy.resetAllSuccessLabel);
  };

  return (
    <WindowShell
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      badge={copy.badge}
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <div
            data-testid="current-plan-card"
            className="rounded-2xl border border-black/5 bg-white px-4 py-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.currentPlanLabel}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {activePlan}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {copy.currentPlanDescription}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.plans.map((plan) => {
              const isActive = plan.title === activePlan;

              return (
                <div
                  key={plan.title}
                  data-testid={`plan-card-${plan.title}`}
                  className={`rounded-2xl border bg-white px-4 py-4 ${
                    isActive
                      ? "border-emerald-200/80 ring-2 ring-emerald-200/70"
                      : "border-black/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {plan.title}
                    </p>
                    {isActive ? (
                      <span className="rounded-full border border-emerald-200/70 bg-emerald-100/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        {copy.selectedLabel}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900">
                    {plan.price}
                  </p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {copy.includeLabel}
                  </p>
                  <div className="mt-2 space-y-2 text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <p key={feature}>{feature}</p>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => selectPlan(plan.title)}
                    disabled={isActive}
                    className={`mt-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? "cursor-default border border-emerald-200/70 bg-emerald-100/70 text-emerald-700"
                        : "border border-black/10 bg-white text-slate-600 hover:-translate-y-0.5"
                    }`}
                  >
                    {isActive ? copy.selectedLabel : copy.actionLabel}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.metricsLabel}
            </p>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <p>Rendimento mensal: {activeProfileSnapshot.monthlyIncomeLabel}</p>
              <p>Gasto atual: {activeProfileSnapshot.totalSpentLabel}</p>
              <p>Orçamento planeado: {activeProfileSnapshot.totalBudgetLabel}</p>
              <p>Margem atual: {activeProfileSnapshot.remainingIncomeLabel}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.exportLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {copy.exportDescription}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copySummary}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
              >
                {copy.exportAction}
              </button>
              <button
                type="button"
                onClick={downloadSummary}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
              >
                {copy.exportDownloadAction}
              </button>
            </div>
            <pre className="mt-4 overflow-auto rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600 whitespace-pre-wrap">
              {summaryText}
            </pre>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {copy.resetLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {copy.resetDescription}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleResetProfile}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
              >
                {copy.resetProfileAction}
              </button>
              <button
                type="button"
                onClick={handleResetAll}
                className="inline-flex items-center rounded-full border border-rose-200/70 bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-700 transition hover:-translate-y-0.5"
              >
                {copy.resetAllAction}
              </button>
            </div>
          </div>

          {feedback ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                feedback.tone === "success"
                  ? "border-emerald-200/70 bg-emerald-50 text-emerald-700"
                  : "border-black/10 bg-slate-50 text-slate-600"
              }`}
            >
              {feedback.message}
            </div>
          ) : null}
        </div>
      </div>
    </WindowShell>
  );
}
