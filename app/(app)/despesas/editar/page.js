"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { routes } from "@/config/routes.mjs";
import { useAppState } from "@/lib/finance-store";
import { despesasCopy } from "@/messages/pt-PT/despesas";
import ProfileRequiredState from "../../profile-required-state";
import WindowShell from "../../window-shell";

function buildForm(expense, fallbackCategory) {
  return {
    name: expense?.name || "",
    amount: expense?.amount?.toString() || "",
    date: expense?.date || new Date().toISOString().slice(0, 10),
    category: expense?.category || fallbackCategory,
    kind: expense?.kind || "variable",
    notes: expense?.notes || "",
  };
}

function EditExpenseForm({
  activeProfileName,
  activeProfileSnapshot,
  buildHref,
  updateExpense,
  deleteExpense,
  selectedExpense,
  categories,
}) {
  const copy = despesasCopy.edit;
  const recentExpenses = activeProfileSnapshot.latestExpenses;
  const [form, setForm] = useState(() =>
    buildForm(selectedExpense, categories[0] || copy.categoryOptions[0])
  );
  const [feedback, setFeedback] = useState("");

  const updateField = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const selectedCategoryState = activeProfileSnapshot.categoryBreakdown.find(
    (entry) => entry.category === form.category
  );

  const saveExpense = () => {
    if (!form.name.trim() || Number(form.amount) <= 0) {
      setFeedback("Preencha descrição e valor antes de guardar.");
      return;
    }

    updateExpense(activeProfileName, selectedExpense.id, {
      name: form.name,
      amount: form.amount,
      date: form.date,
      category: form.category,
      kind: form.kind,
      notes: form.notes,
    });
    setFeedback("Alterações guardadas.");
  };

  const removeExpense = () => {
    deleteExpense(activeProfileName, selectedExpense.id);
    setFeedback("Despesa removida.");
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
          {copy.fields.amount}
          <input
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={(event) => updateField("amount", event.target.value)}
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
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
          />
        </label>
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.alertsLabel}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            {selectedCategoryState
              ? `${form.category} está em ${selectedCategoryState.progressLabel} do limite (${selectedCategoryState.spentLabel} de ${selectedCategoryState.limitLabel}).`
              : copy.alertsBody}
          </p>
          <div className="mt-3 h-2 rounded-full bg-slate-100">
            <div
              className={`h-2 rounded-full ${
                selectedCategoryState?.status === "critical"
                  ? "bg-rose-500"
                  : selectedCategoryState?.status === "warning"
                    ? "bg-amber-500"
                    : "bg-emerald-500"
              }`}
              style={{
                width: `${Math.min(
                  (selectedCategoryState?.progress || 0) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {copy.recentLabel}
          </p>
          <div className="mt-3 space-y-2">
            {recentExpenses.slice(0, 4).map((expense) => (
              <Link
                key={expense.id}
                href={buildHref(`${routes.despesas.editar}?id=${expense.id}`)}
                className={`block rounded-2xl border px-3 py-2 text-sm transition hover:-translate-y-0.5 ${
                  expense.id === selectedExpense.id
                    ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-800"
                    : "border-black/10 bg-white text-slate-600"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{expense.name}</span>
                  <span>{expense.amountLabel}</span>
                </div>
              </Link>
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
              onClick={saveExpense}
              className="inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
            >
              {copy.actions.save}
            </button>
            <button
              type="button"
              onClick={removeExpense}
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5"
            >
              {copy.actions.delete}
            </button>
          </div>
          {feedback ? (
            <p className="mt-3 text-sm text-slate-600">{feedback}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function DespesasEdit() {
  const copy = despesasCopy.edit;
  const searchParams = useSearchParams();
  const {
    activeProfileName,
    activeProfile,
    activeProfileSnapshot,
    buildHref,
    updateExpense,
    deleteExpense,
    isHydrated,
  } = useAppState();
  const expenseId = searchParams.get("id");
  const recentExpenses = activeProfileSnapshot.latestExpenses;
  const selectedExpense =
    recentExpenses.find((expense) => expense.id === expenseId) ||
    recentExpenses[0] ||
    null;
  const categories = activeProfile
    ? Object.keys(activeProfile.budgetLimits)
    : copy.categoryOptions;
  const formKey = `${selectedExpense?.id || activeProfileName}-${isHydrated ? "hydrated" : "loading"}`;

  return (
    <WindowShell
      eyebrow={copy.eyebrow}
      title={copy.title}
      subtitle={copy.subtitle}
      badge={copy.badge}
    >
      {!activeProfileName ? (
        <ProfileRequiredState />
      ) : !selectedExpense ? (
        <div className="rounded-3xl border border-dashed border-black/10 bg-white px-6 py-10 text-center text-sm text-slate-600">
          {copy.emptyLabel}
        </div>
      ) : (
        <EditExpenseForm
          key={formKey}
          activeProfileName={activeProfileName}
          activeProfileSnapshot={activeProfileSnapshot}
          buildHref={buildHref}
          updateExpense={updateExpense}
          deleteExpense={deleteExpense}
          selectedExpense={selectedExpense}
          categories={categories}
        />
      )}
    </WindowShell>
  );
}
