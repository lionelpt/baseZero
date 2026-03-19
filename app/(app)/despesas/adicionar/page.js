"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes.mjs";
import { useAppState } from "@/lib/finance-store";
import { validateExpense } from "@/lib/validation/schemas";
import { despesasCopy } from "@/messages/pt-PT/despesas";
import ProfileRequiredState from "../../profile-required-state";
import WindowShell from "../../window-shell";

const shortcutCategories = {
  "Café": "Alimentação",
  Supermercado: "Alimentação",
  Uber: "Transportes",
  Farmácia: "Saúde",
  Combustível: "Transportes",
};

function buildInitialForm(activeProfile) {
  const categories = activeProfile
    ? Object.keys(activeProfile.budgetLimits)
    : ["Alimentação"];

  return {
    name: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
    category: categories[0] || "Alimentação",
    kind: "variable",
    notes: "",
  };
}

function AddExpenseForm({ activeProfileName, activeProfile, addExpense, buildHref }) {
  const copy = despesasCopy.add;
  const router = useRouter();
  const [form, setForm] = useState(() => buildInitialForm(activeProfile));
  const [feedback, setFeedback] = useState(null);
  const categories = activeProfile
    ? Object.keys(activeProfile.budgetLimits)
    : copy.categoryOptions;

  const updateField = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const handleShortcut = (label) => {
    const suggestedCategory = shortcutCategories[label];
    const nextCategory = categories.includes(suggestedCategory)
      ? suggestedCategory
      : categories[0];

    setForm((currentForm) => ({
      ...currentForm,
      name: label,
      category: nextCategory,
      kind:
        nextCategory && /habitação|renda|propinas|serviços/i.test(nextCategory)
          ? "fixed"
          : "variable",
    }));
  };

  const persistExpense = (resetAfterSave) => {
    // Validação usando Zod
    const validation = validateExpense({
      name: form.name,
      amount: Number(form.amount),
      date: form.date,
      category: form.category,
      kind: form.kind,
      notes: form.notes,
    });

    if (!validation.success) {
      setFeedback({
        tone: "error",
        message: validation.message,
      });
      return;
    }

    const expenseId = addExpense({
      profileName: activeProfileName,
      name: form.name,
      amount: form.amount,
      date: form.date,
      category: form.category,
      kind: form.kind,
      notes: form.notes,
    });

    if (!expenseId) {
      setFeedback({
        tone: "error",
        message: "Não foi possível guardar a despesa.",
      });
      return;
    }

    if (resetAfterSave) {
      setForm(buildInitialForm(activeProfile));
      setFeedback({
        tone: "success",
        message: copy.successLabel,
      });
      return;
    }

    router.push(buildHref(routes.despesas.lista));
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
            placeholder={copy.namePlaceholder}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.amount}
          <input
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={(event) => updateField("amount", event.target.value)}
            placeholder="0.00"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.date}
          <input
            type="date"
            value={form.date}
            onChange={(event) => updateField("date", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.category}
          <select
            value={form.category}
            onChange={(event) => updateField("category", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.kind}
          <select
            value={form.kind}
            onChange={(event) => updateField("kind", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
          >
            <option value="fixed">{copy.kindOptions.fixed}</option>
            <option value="variable">{copy.kindOptions.variable}</option>
          </select>
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {copy.fields.notes}
          <textarea
            rows={4}
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            placeholder={copy.notesPlaceholder}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
          />
        </label>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.shortcutsLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {copy.shortcuts.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleShortcut(item)}
                className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:-translate-y-0.5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.actionsLabel}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => persistExpense(false)}
              className="inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
            >
              {copy.actions.save}
            </button>
            <button
              type="button"
              onClick={() => persistExpense(true)}
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
            >
              {copy.actions.saveAndAddAnother}
            </button>
          </div>
          {feedback ? (
            <div className={`mt-3 rounded-lg px-3 py-2 text-sm font-medium ${
              feedback.tone === "error"
                ? "bg-red-50 text-red-700"
                : "bg-green-50 text-green-700"
            }`}>
              {feedback.message}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function DespesasAdd() {
  const copy = despesasCopy.add;
  const { activeProfileName, activeProfile, addExpense, buildHref, isHydrated } =
    useAppState();
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
        <AddExpenseForm
          key={formKey}
          activeProfileName={activeProfileName}
          activeProfile={activeProfile}
          addExpense={addExpense}
          buildHref={buildHref}
        />
      )}
    </WindowShell>
  );
}
