import { describe, it, expect } from "vitest";
import {
  validateExpense,
  validateProfileDetails,
  validateBudgetLimits,
  ExpenseSchema,
  ProfileDetailsSchema,
} from "@/lib/validation/schemas";

describe("Expense Validation", () => {
  it("valida despesa com dados válidos", () => {
    const result = validateExpense({
      name: "Renda",
      amount: 900.5,
      category: "Habitação",
      date: "2026-03-19",
      kind: "fixed",
    });

    expect(result.success).toBe(true);
    expect(result.data.name).toBe("Renda");
    expect(result.data.amount).toBe(900.5);
  });

  it("rejeita valor negativo", () => {
    const result = validateExpense({
      name: "Compra",
      amount: -50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("positivo");
  });

  it("rejeita valor zero", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 0,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita nome vazio", () => {
    const result = validateExpense({
      name: "",
      amount: 50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("caracteres");
  });

  it("rejeita nome muito longo", () => {
    const result = validateExpense({
      name: "a".repeat(101),
      amount: 50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita categoria vazia", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50,
      category: "",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita data em formato inválido", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50,
      category: "Alimentação",
      date: "19/03/2026",
      kind: "variable",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita tipo inválido", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "invalid",
    });

    expect(result.success).toBe(false);
  });

  it("rejeita notas muito longas", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
      notes: "a".repeat(501),
    });

    expect(result.success).toBe(false);
  });

  it("aceita notas vazias ou omitidas", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
      notes: "",
    });

    expect(result.success).toBe(true);
    expect(result.data.notes).toBe("");
  });

  it("limpa espaços em branco", () => {
    const result = validateExpense({
      name: "  Compra  ",
      amount: 50,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(true);
    expect(result.data.name).toBe("Compra");
  });

  it("rejeita múltiplas casas decimais inválidas", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50.999,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(false);
  });

  it("aceita até 2 casas decimais", () => {
    const result = validateExpense({
      name: "Compra",
      amount: 50.99,
      category: "Alimentação",
      date: "2026-03-19",
      kind: "variable",
    });

    expect(result.success).toBe(true);
    expect(result.data.amount).toBe(50.99);
  });
});

describe("Profile Details Validation", () => {
  it("valida perfil com dados válidos", () => {
    const result = validateProfileDetails({
      name: "Ana Martins",
      email: "ana@email.com",
      currency: "EUR",
      monthlyIncome: 2400,
    });

    expect(result.success).toBe(true);
    expect(result.data.email).toBe("ana@email.com");
  });

  it("rejeita email inválido", () => {
    const result = validateProfileDetails({
      name: "Ana",
      email: "email-invalido",
      currency: "EUR",
      monthlyIncome: 2400,
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("Email");
  });

  it("rejeita rendimento zero", () => {
    const result = validateProfileDetails({
      name: "Ana",
      email: "ana@email.com",
      currency: "EUR",
      monthlyIncome: 0,
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("positivo");
  });

  it("rejeita rendimento negativo", () => {
    const result = validateProfileDetails({
      name: "Ana",
      email: "ana@email.com",
      currency: "EUR",
      monthlyIncome: -100,
    });

    expect(result.success).toBe(false);
  });

  it("rejeita nome vazio", () => {
    const result = validateProfileDetails({
      name: "",
      email: "ana@email.com",
      currency: "EUR",
      monthlyIncome: 2400,
    });

    expect(result.success).toBe(false);
  });

  it("rejeita nome muito longo", () => {
    const result = validateProfileDetails({
      name: "a".repeat(51),
      email: "ana@email.com",
      currency: "EUR",
      monthlyIncome: 2400,
    });

    expect(result.success).toBe(false);
  });

  it("normaliza email para minúsculas", () => {
    const result = validateProfileDetails({
      name: "Ana",
      email: "ANA@EMAIL.COM",
      currency: "EUR",
      monthlyIncome: 2400,
    });

    expect(result.success).toBe(true);
    expect(result.data.email).toBe("ana@email.com");
  });

  it("limpa espaços em nome", () => {
    const result = validateProfileDetails({
      name: "  Ana Martins  ",
      email: "ana@email.com",
      currency: "EUR",
      monthlyIncome: 2400,
    });

    expect(result.success).toBe(true);
    expect(result.data.name).toBe("Ana Martins");
  });
});

describe("Budget Limits Validation", () => {
  const validBudgets = {
    Habitação: 900,
    Alimentação: 320,
    Transportes: 120,
    Lazer: 90,
    Saúde: 80,
  };

  it("valida limites orçamentais válidos", () => {
    const result = validateBudgetLimits(validBudgets);
    expect(result.success).toBe(true);
  });

  it("rejeita limite negativo", () => {
    const result = validateBudgetLimits({
      ...validBudgets,
      Habitação: -100,
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("positivo");
  });

  it("aceita limite zero", () => {
    const result = validateBudgetLimits({
      ...validBudgets,
      Lazer: 0,
    });

    expect(result.success).toBe(true);
  });
});
