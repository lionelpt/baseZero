"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { appendProfileToHref, getProfileParam, setProfileParam } from "@/lib/profile-query";

const STORAGE_KEY = "cash-app-state-v1";

const DEFAULT_STATE = {
  selectedProfile: "Pessoal",
  profiles: {
    Pessoal: {
      details: {
        name: "Ana Martins",
        email: "ana@email.com",
        currency: "EUR",
        monthlyIncome: 2400,
        plan: "Plus",
      },
      preferences: {
        emailSummary: true,
        alerts: true,
        weekStartsOn: "Segunda-feira",
      },
      budgetLimits: {
        Habitação: 900,
        Alimentação: 320,
        Transportes: 120,
        Lazer: 90,
        Saúde: 80,
      },
      expenses: [
        {
          id: "pessoal-renda",
          name: "Renda",
          category: "Habitação",
          amount: 850,
          date: "2026-03-01",
          kind: "fixed",
          notes: "Pagamento mensal",
        },
        {
          id: "pessoal-supermercado",
          name: "Supermercado",
          category: "Alimentação",
          amount: 218,
          date: "2026-03-02",
          kind: "variable",
          notes: "Compras da semana",
        },
        {
          id: "pessoal-refeicoes",
          name: "Refeições fora",
          category: "Alimentação",
          amount: 34,
          date: "2026-03-08",
          kind: "variable",
          notes: "Almoço com amigos",
        },
        {
          id: "pessoal-transportes",
          name: "Transportes",
          category: "Transportes",
          amount: 42,
          date: "2026-03-03",
          kind: "variable",
          notes: "Metro e autocarro",
        },
        {
          id: "pessoal-streaming",
          name: "Streaming",
          category: "Lazer",
          amount: 12,
          date: "2026-03-03",
          kind: "fixed",
          notes: "Subscrição mensal",
        },
        {
          id: "pessoal-farmacia",
          name: "Farmácia",
          category: "Saúde",
          amount: 28,
          date: "2026-03-06",
          kind: "variable",
          notes: "Cuidados pontuais",
        },
      ],
    },
    Estudante: {
      details: {
        name: "João Ribeiro",
        email: "joao@email.com",
        currency: "EUR",
        monthlyIncome: 980,
        plan: "Essencial",
      },
      preferences: {
        emailSummary: false,
        alerts: true,
        weekStartsOn: "Segunda-feira",
      },
      budgetLimits: {
        Propinas: 300,
        Alimentação: 220,
        Transportes: 45,
        Material: 70,
        Lazer: 60,
      },
      expenses: [
        {
          id: "estudante-propinas",
          name: "Propinas",
          category: "Propinas",
          amount: 280,
          date: "2026-03-01",
          kind: "fixed",
          notes: "Mensalidade da faculdade",
        },
        {
          id: "estudante-supermercado",
          name: "Supermercado",
          category: "Alimentação",
          amount: 184,
          date: "2026-03-05",
          kind: "variable",
          notes: "Compras do mês",
        },
        {
          id: "estudante-passe",
          name: "Passe",
          category: "Transportes",
          amount: 32,
          date: "2026-03-02",
          kind: "fixed",
          notes: "Passe mensal",
        },
        {
          id: "estudante-livros",
          name: "Livros",
          category: "Material",
          amount: 56,
          date: "2026-03-07",
          kind: "variable",
          notes: "Material de apoio",
        },
        {
          id: "estudante-cinema",
          name: "Cinema",
          category: "Lazer",
          amount: 24,
          date: "2026-03-09",
          kind: "variable",
          notes: "Saída ao fim de semana",
        },
      ],
    },
    "Família": {
      details: {
        name: "Família Costa",
        email: "familia@email.com",
        currency: "EUR",
        monthlyIncome: 3600,
        plan: "Pro",
      },
      preferences: {
        emailSummary: true,
        alerts: true,
        weekStartsOn: "Segunda-feira",
      },
      budgetLimits: {
        Habitação: 1200,
        Alimentação: 650,
        Educação: 250,
        Transportes: 220,
        Lazer: 180,
      },
      expenses: [
        {
          id: "familia-renda",
          name: "Prestação da casa",
          category: "Habitação",
          amount: 1180,
          date: "2026-03-01",
          kind: "fixed",
          notes: "Crédito habitação",
        },
        {
          id: "familia-supermercado",
          name: "Supermercado",
          category: "Alimentação",
          amount: 472,
          date: "2026-03-04",
          kind: "variable",
          notes: "Compras semanais",
        },
        {
          id: "familia-atividades",
          name: "Atividades escolares",
          category: "Educação",
          amount: 210,
          date: "2026-03-06",
          kind: "variable",
          notes: "Material e visitas",
        },
        {
          id: "familia-combustivel",
          name: "Combustível",
          category: "Transportes",
          amount: 146,
          date: "2026-03-08",
          kind: "variable",
          notes: "Deslocações familiares",
        },
        {
          id: "familia-lazer",
          name: "Fim de semana",
          category: "Lazer",
          amount: 112,
          date: "2026-03-09",
          kind: "variable",
          notes: "Passeio em família",
        },
      ],
    },
    Casa: {
      details: {
        name: "Casa Partilhada",
        email: "casa@email.com",
        currency: "EUR",
        monthlyIncome: 2900,
        plan: "Plus",
      },
      preferences: {
        emailSummary: true,
        alerts: true,
        weekStartsOn: "Segunda-feira",
      },
      budgetLimits: {
        Renda: 1100,
        Serviços: 240,
        Supermercado: 420,
        Reparações: 160,
        Outros: 120,
      },
      expenses: [
        {
          id: "casa-renda",
          name: "Renda",
          category: "Renda",
          amount: 1100,
          date: "2026-03-01",
          kind: "fixed",
          notes: "Pagamento mensal",
        },
        {
          id: "casa-luz-gas",
          name: "Luz e gás",
          category: "Serviços",
          amount: 164,
          date: "2026-03-05",
          kind: "fixed",
          notes: "Débito direto",
        },
        {
          id: "casa-supermercado",
          name: "Supermercado",
          category: "Supermercado",
          amount: 338,
          date: "2026-03-07",
          kind: "variable",
          notes: "Compras partilhadas",
        },
        {
          id: "casa-reparacao",
          name: "Canalizador",
          category: "Reparações",
          amount: 92,
          date: "2026-03-10",
          kind: "variable",
          notes: "Arranjo da cozinha",
        },
        {
          id: "casa-outros",
          name: "Produtos de limpeza",
          category: "Outros",
          amount: 38,
          date: "2026-03-11",
          kind: "variable",
          notes: "Reposição mensal",
        },
      ],
    },
  },
};

const AppStateContext = createContext(null);

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function cloneDefaultProfile(profileName) {
  const fallbackState = cloneDefaultState();
  return fallbackState.profiles[profileName]
    ? JSON.parse(JSON.stringify(fallbackState.profiles[profileName]))
    : null;
}

function createExpenseId() {
  return `expense-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function toNumber(value, fallback = 0) {
  const nextValue = Number(value);
  return Number.isFinite(nextValue) ? nextValue : fallback;
}

function roundAmount(value) {
  return Math.round(toNumber(value) * 100) / 100;
}

function formatCurrency(value, currency = "EUR") {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(toNumber(value));
}

function formatSignedCurrency(value, currency = "EUR") {
  const numericValue = roundAmount(value);
  const prefix = numericValue > 0 ? "+" : numericValue < 0 ? "-" : "";

  return `${prefix}${formatCurrency(Math.abs(numericValue), currency)}`;
}

function formatShortDate(value) {
  const nextDate = value ? new Date(value) : new Date();

  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "2-digit",
  }).format(nextDate);
}

function formatMonthLabel(value) {
  const nextDate = value ? new Date(value) : new Date();

  return new Intl.DateTimeFormat("pt-PT", {
    month: "long",
    year: "numeric",
  }).format(nextDate);
}

function buildExpense(expense, fallbackCategory) {
  if (!expense || typeof expense !== "object") {
    return null;
  }

  const amount = roundAmount(expense.amount);

  if (amount <= 0) {
    return null;
  }

  return {
    id: expense.id || createExpenseId(),
    name: (expense.name || "Despesa").trim(),
    category: expense.category || fallbackCategory || "Outros",
    amount,
    date: expense.date || new Date().toISOString().slice(0, 10),
    kind: expense.kind === "fixed" ? "fixed" : "variable",
    notes: (expense.notes || "").trim(),
  };
}

function normalizeProfile(profile, fallbackProfile) {
  const details = {
    ...fallbackProfile.details,
    ...(profile?.details || {}),
    monthlyIncome: roundAmount(
      profile?.details?.monthlyIncome ?? fallbackProfile.details.monthlyIncome
    ),
  };

  const preferences = {
    ...fallbackProfile.preferences,
    ...(profile?.preferences || {}),
  };

  const budgetLimits = {
    ...fallbackProfile.budgetLimits,
    ...(profile?.budgetLimits || {}),
  };

  const firstCategory = Object.keys(budgetLimits)[0] || "Outros";
  const expenses = Array.isArray(profile?.expenses)
    ? profile.expenses
        .map((expense) => buildExpense(expense, firstCategory))
        .filter(Boolean)
    : fallbackProfile.expenses.map((expense) => ({ ...expense }));

  return {
    details,
    preferences,
    budgetLimits,
    expenses,
  };
}

function normalizeState(candidate) {
  const fallbackState = cloneDefaultState();

  if (!candidate || typeof candidate !== "object") {
    return fallbackState;
  }

  const profiles = Object.fromEntries(
    Object.entries(fallbackState.profiles).map(([profileName, profile]) => [
      profileName,
      normalizeProfile(candidate.profiles?.[profileName], profile),
    ])
  );

  const selectedProfile =
    candidate.selectedProfile && profiles[candidate.selectedProfile]
      ? candidate.selectedProfile
      : fallbackState.selectedProfile;

  return {
    selectedProfile,
    profiles,
  };
}

function calculateCategoryBreakdown(profile) {
  const categories = new Set([
    ...Object.keys(profile.budgetLimits),
    ...profile.expenses.map((expense) => expense.category),
  ]);

  const currency = profile.details.currency;

  return Array.from(categories)
    .map((category) => {
      const limit = roundAmount(profile.budgetLimits[category] ?? 0);
      const spent = roundAmount(
        profile.expenses
          .filter((expense) => expense.category === category)
          .reduce((sum, expense) => sum + expense.amount, 0)
      );
      const remaining = roundAmount(limit - spent);
      const progress = limit > 0 ? spent / limit : spent > 0 ? 1 : 0;
      let status = "calm";

      if (limit > 0 && spent > limit) {
        status = "critical";
      } else if (progress >= 0.75) {
        status = "warning";
      }

      return {
        category,
        limit,
        spent,
        remaining,
        progress,
        status,
        limitLabel: formatCurrency(limit, currency),
        spentLabel: formatCurrency(spent, currency),
        remainingLabel: formatCurrency(Math.abs(remaining), currency),
        progressLabel: `${Math.round(progress * 100)}%`,
      };
    })
    .sort((left, right) => right.spent - left.spent || right.limit - left.limit);
}

function calculateProfileSnapshot(profile) {
  if (!profile) {
    return {
      currency: "EUR",
      monthLabel: formatMonthLabel(),
      monthlyIncome: 0,
      monthlyIncomeLabel: formatCurrency(0),
      totalSpent: 0,
      totalSpentLabel: formatCurrency(0),
      totalBudget: 0,
      totalBudgetLabel: formatCurrency(0),
      remainingIncome: 0,
      remainingIncomeLabel: formatCurrency(0),
      overIncomeLabel: formatCurrency(0),
      fixedSpent: 0,
      fixedSpentLabel: formatCurrency(0),
      variableSpent: 0,
      variableSpentLabel: formatCurrency(0),
      categoryBreakdown: [],
      alertCategories: [],
      overBudgetCategories: [],
      alertCategoryNames: [],
      topCategory: null,
      latestExpenses: [],
      insights: [],
      primaryAlert: null,
      scenarios: [],
    };
  }

  const currency = profile.details.currency;
  const latestExpenses = [...profile.expenses]
    .sort((left, right) => new Date(right.date) - new Date(left.date))
    .map((expense) => ({
      ...expense,
      amountLabel: formatCurrency(expense.amount, currency),
      dateLabel: formatShortDate(expense.date),
    }));

  const totalSpent = roundAmount(
    latestExpenses.reduce((sum, expense) => sum + expense.amount, 0)
  );
  const totalBudget = roundAmount(
    Object.values(profile.budgetLimits).reduce(
      (sum, limit) => sum + roundAmount(limit),
      0
    )
  );
  const fixedSpent = roundAmount(
    latestExpenses
      .filter((expense) => expense.kind === "fixed")
      .reduce((sum, expense) => sum + expense.amount, 0)
  );
  const variableSpent = roundAmount(totalSpent - fixedSpent);
  const remainingIncome = roundAmount(profile.details.monthlyIncome - totalSpent);
  const categoryBreakdown = calculateCategoryBreakdown(profile);
  const alertCategories = categoryBreakdown.filter(
    (entry) => entry.progress >= 0.75 && entry.spent > 0
  );
  const overBudgetCategories = alertCategories.filter(
    (entry) => entry.limit > 0 && entry.spent > entry.limit
  );
  const topCategory = categoryBreakdown[0] || null;
  const primaryAlert = overBudgetCategories[0] || alertCategories[0] || null;
  const monthLabel = formatMonthLabel(latestExpenses[0]?.date);
  const extraIncome = Math.max(150, Math.round(profile.details.monthlyIncome * 0.08));
  const variableReduction = Math.round(variableSpent * 0.15);
  const housingCategory =
    categoryBreakdown.find((entry) => /habitação|renda/i.test(entry.category)) ||
    topCategory;
  const housingIncrease = Math.max(
    40,
    Math.round((housingCategory?.spent || totalSpent || 0) * 0.1)
  );
  const insights = [];

  if (primaryAlert) {
    insights.push(
      `${primaryAlert.category} já consumiu ${primaryAlert.progressLabel} do limite.`
    );
  }

  if (remainingIncome >= 0) {
    insights.push(
      `Mantém ${formatCurrency(
        remainingIncome,
        currency
      )} de margem face ao rendimento mensal.`
    );
  } else {
    insights.push(
      `Está ${formatCurrency(
        Math.abs(remainingIncome),
        currency
      )} acima do rendimento mensal definido.`
    );
  }

  if (topCategory) {
    insights.push(
      `${topCategory.category} é a categoria com maior peso: ${topCategory.spentLabel}.`
    );
  }

  const scenarios = [
    {
      id: "tight-month",
      title: "Mês apertado",
      description:
        variableReduction > 0
          ? `Se reduzir 15% das despesas variáveis, liberta ${formatCurrency(
              variableReduction,
              currency
            )} e a margem sobe para ${formatCurrency(
              remainingIncome + variableReduction,
              currency
            )}.`
          : "Sem despesas variáveis suficientes para gerar uma poupança relevante.",
      impactLabel: formatSignedCurrency(variableReduction, currency),
      marginAfterLabel: formatCurrency(
        remainingIncome + variableReduction,
        currency
      ),
      tone: "positive",
    },
    {
      id: "extra-income",
      title: "Rendimento extra",
      description: `Com um reforço pontual de ${formatCurrency(
        extraIncome,
        currency
      )}, a margem disponível passa para ${formatCurrency(
        remainingIncome + extraIncome,
        currency
      )}.`,
      impactLabel: formatSignedCurrency(extraIncome, currency),
      marginAfterLabel: formatCurrency(remainingIncome + extraIncome, currency),
      tone: "positive",
    },
    {
      id: "rent-increase",
      title: "Aumento da renda",
      description: housingCategory
        ? `Se ${housingCategory.category.toLowerCase()} subir ${formatCurrency(
            housingIncrease,
            currency
          )}, a margem desce para ${formatCurrency(
            remainingIncome - housingIncrease,
            currency
          )}.`
        : "Sem categoria principal para simular um aumento estrutural.",
      impactLabel: formatSignedCurrency(-housingIncrease, currency),
      marginAfterLabel: formatCurrency(remainingIncome - housingIncrease, currency),
      tone: "negative",
    },
  ];

  return {
    currency,
    monthLabel,
    monthlyIncome: profile.details.monthlyIncome,
    monthlyIncomeLabel: formatCurrency(profile.details.monthlyIncome, currency),
    totalSpent,
    totalSpentLabel: formatCurrency(totalSpent, currency),
    totalBudget,
    totalBudgetLabel: formatCurrency(totalBudget, currency),
    remainingIncome,
    remainingIncomeLabel: formatCurrency(remainingIncome, currency),
    overIncomeLabel: formatCurrency(Math.abs(remainingIncome), currency),
    fixedSpent,
    fixedSpentLabel: formatCurrency(fixedSpent, currency),
    variableSpent,
    variableSpentLabel: formatCurrency(variableSpent, currency),
    categoryBreakdown,
    alertCategories,
    overBudgetCategories,
    alertCategoryNames: alertCategories.map((entry) => entry.category),
    topCategory,
    latestExpenses,
    insights,
    primaryAlert,
    scenarios,
  };
}

export function AppStateProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState(() => cloneDefaultState());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedState = window.localStorage.getItem(STORAGE_KEY);

      if (storedState) {
        setState(normalizeState(JSON.parse(storedState)));
      }
    } catch {
      setState(cloneDefaultState());
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [isHydrated, state]);

  const updateState = (updater) => {
    setState((currentState) => {
      const nextState =
        typeof updater === "function" ? updater(currentState) : updater;

      if (isHydrated) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
      }

      return nextState;
    });
  };

  const profileFromQuery = getProfileParam(searchParams);
  const activeProfileName =
    (profileFromQuery && state.profiles[profileFromQuery] && profileFromQuery) ||
    (state.selectedProfile && state.profiles[state.selectedProfile]
      ? state.selectedProfile
      : null);
  const activeProfile = activeProfileName ? state.profiles[activeProfileName] : null;
  const activeProfileSnapshot = calculateProfileSnapshot(activeProfile);

  useEffect(() => {
    if (
      profileFromQuery &&
      state.profiles[profileFromQuery] &&
      state.selectedProfile !== profileFromQuery
    ) {
      setState((currentState) => {
        const nextState = {
          ...currentState,
          selectedProfile: profileFromQuery,
        };

        if (isHydrated) {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
        }

        return nextState;
      });
    }
  }, [profileFromQuery, state.profiles, state.selectedProfile, isHydrated]);

  const syncProfileInUrl = (profileName) => {
    const params = setProfileParam(searchParams, profileName);
    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const setActiveProfile = (profileName) => {
    if (profileName && !state.profiles[profileName]) {
      return;
    }

    updateState((currentState) => ({
      ...currentState,
      selectedProfile: profileName,
    }));
    syncProfileInUrl(profileName);
  };

  const clearActiveProfile = () => {
    setActiveProfile(null);
  };

  const buildHref = (href, profileName = activeProfileName) =>
    appendProfileToHref(href, profileName);

  const addExpense = (input) => {
    const profileName = input.profileName || activeProfileName;

    if (!profileName || !state.profiles[profileName]) {
      return null;
    }

    const fallbackCategory =
      Object.keys(state.profiles[profileName].budgetLimits)[0] || "Outros";
    const nextExpense = buildExpense(input, fallbackCategory);

    if (!nextExpense) {
      return null;
    }

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: {
          ...currentState.profiles[profileName],
          expenses: [nextExpense, ...currentState.profiles[profileName].expenses],
        },
      },
    }));

    return nextExpense.id;
  };

  const updateExpense = (profileName, expenseId, input) => {
    if (!profileName || !expenseId || !state.profiles[profileName]) {
      return;
    }

    const fallbackCategory =
      Object.keys(state.profiles[profileName].budgetLimits)[0] || "Outros";

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: {
          ...currentState.profiles[profileName],
          expenses: currentState.profiles[profileName].expenses.map((expense) => {
            if (expense.id !== expenseId) {
              return expense;
            }

            return (
              buildExpense(
                {
                  ...expense,
                  ...input,
                },
                fallbackCategory
              ) || expense
            );
          }),
        },
      },
    }));
  };

  const deleteExpense = (profileName, expenseId) => {
    if (!profileName || !expenseId || !state.profiles[profileName]) {
      return;
    }

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: {
          ...currentState.profiles[profileName],
          expenses: currentState.profiles[profileName].expenses.filter(
            (expense) => expense.id !== expenseId
          ),
        },
      },
    }));
  };

  const updateBudgetLimit = (profileName, category, nextLimit) => {
    if (!profileName || !category || !state.profiles[profileName]) {
      return;
    }

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: {
          ...currentState.profiles[profileName],
          budgetLimits: {
            ...currentState.profiles[profileName].budgetLimits,
            [category]: Math.max(0, roundAmount(nextLimit)),
          },
        },
      },
    }));
  };

  const updateProfileDetails = (profileName, nextDetails) => {
    if (!profileName || !state.profiles[profileName]) {
      return;
    }

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: {
          ...currentState.profiles[profileName],
          details: {
            ...currentState.profiles[profileName].details,
            ...nextDetails,
            monthlyIncome: roundAmount(
              nextDetails.monthlyIncome ??
                currentState.profiles[profileName].details.monthlyIncome
            ),
          },
        },
      },
    }));
  };

  const updateProfilePlan = (profileName, nextPlan) => {
    if (!profileName || !nextPlan || !state.profiles[profileName]) {
      return;
    }

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: {
          ...currentState.profiles[profileName],
          details: {
            ...currentState.profiles[profileName].details,
            plan: nextPlan,
          },
        },
      },
    }));
  };

  const resetProfile = (profileName) => {
    const nextProfile = cloneDefaultProfile(profileName);

    if (!profileName || !nextProfile || !state.profiles[profileName]) {
      return;
    }

    updateState((currentState) => ({
      ...currentState,
      profiles: {
        ...currentState.profiles,
        [profileName]: nextProfile,
      },
    }));
  };

  const resetAllData = () => {
    const fallbackState = cloneDefaultState();

    updateState({
      ...fallbackState,
      selectedProfile: activeProfileName || fallbackState.selectedProfile,
    });
  };

  const value = {
    isHydrated,
    profiles: state.profiles,
    profileNames: Object.keys(state.profiles),
    activeProfileName,
    activeProfile,
    activeProfileSnapshot,
    setActiveProfile,
    clearActiveProfile,
    buildHref,
    addExpense,
    updateExpense,
    deleteExpense,
    updateBudgetLimit,
    updateProfileDetails,
    updateProfilePlan,
    resetProfile,
    resetAllData,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider.");
  }

  return context;
}

export { formatCurrency, formatMonthLabel, formatShortDate };
