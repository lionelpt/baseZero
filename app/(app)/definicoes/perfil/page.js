"use client";

import { useState } from "react";
import { useAppState } from "@/lib/finance-store";
import { definicoesCopy } from "@/messages/pt-PT/definicoes";
import ProfileRequiredState from "../../profile-required-state";
import WindowShell from "../../window-shell";

function ProfileForm({ activeProfileName, activeProfile, updateProfileDetails }) {
  const copy = definicoesCopy.perfil;
  const [form, setForm] = useState({
    name: activeProfile.details.name,
    email: activeProfile.details.email,
    currency: activeProfile.details.currency,
    monthlyIncome: activeProfile.details.monthlyIncome.toString(),
  });
  const [feedback, setFeedback] = useState("");

  const updateField = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const saveProfile = () => {
    updateProfileDetails(activeProfileName, {
      name: form.name,
      email: form.email,
      currency: form.currency,
      monthlyIncome: form.monthlyIncome,
    });
    setFeedback("Alterações guardadas.");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.name}
          <input
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.email}
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.currency}
          <select
            value={form.currency}
            onChange={(event) => updateField("currency", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          >
            {copy.defaults.currencyOptions.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.monthlyIncome}
          <input
            type="number"
            min="0"
            step="0.01"
            value={form.monthlyIncome}
            onChange={(event) => updateField("monthlyIncome", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          />
        </label>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.preferencesLabel}
          </p>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            <p>
              {activeProfile.preferences.emailSummary
                ? "Resumo mensal por email ativo."
                : "Resumo mensal por email desativado."}
            </p>
            <p>
              {activeProfile.preferences.alerts
                ? "Alertas simples de limite de despesa ativos."
                : "Alertas simples de limite de despesa desativados."}
            </p>
            <p>
              A semana começa à{" "}
              {activeProfile.preferences.weekStartsOn?.toLowerCase()}.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.actionsLabel}
          </p>
          <button
            type="button"
            onClick={saveProfile}
            className="mt-3 inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
          >
            {copy.saveLabel}
          </button>
          {feedback ? (
            <p className="mt-3 text-sm text-slate-600">{feedback}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function SettingsProfile() {
  const copy = definicoesCopy.perfil;
  const {
    activeProfileName,
    activeProfile,
    updateProfileDetails,
    isHydrated,
  } = useAppState();
  const formKey = `${activeProfileName}-${isHydrated ? "hydrated" : "loading"}`;

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
        <ProfileForm
          key={formKey}
          activeProfileName={activeProfileName}
          activeProfile={activeProfile}
          updateProfileDetails={updateProfileDetails}
        />
      )}
    </WindowShell>
  );
}
