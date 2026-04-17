module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/config/routes.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "legacyRedirects",
    ()=>legacyRedirects,
    "queryKeys",
    ()=>queryKeys,
    "routes",
    ()=>routes
]);
const queryKeys = {
    profile: "perfil",
    legacyProfile: "profile"
};
const routes = {
    home: "/visao/painel",
    visao: {
        root: "/visao",
        painel: "/visao/painel"
    },
    despesas: {
        root: "/movimentos",
        lista: "/movimentos/lista",
        adicionar: "/movimentos/adicionar",
        editar: "/movimentos/editar"
    },
    planeamento: {
        root: "/planeamento",
        orcamento: "/planeamento/orcamento",
        cenarios: "/planeamento/cenarios"
    },
    definicoes: {
        root: "/definicoes",
        perfil: "/definicoes/perfil",
        plano: "/definicoes/plano"
    }
};
const legacyRedirects = [
    {
        source: "/vision",
        destination: routes.visao.painel,
        permanent: false
    },
    {
        source: "/vision/dashboard",
        destination: routes.visao.painel,
        permanent: false
    },
    {
        source: "/settings",
        destination: routes.definicoes.perfil,
        permanent: false
    },
    {
        source: "/settings/profile",
        destination: routes.definicoes.perfil,
        permanent: false
    },
    {
        source: "/settings/plan",
        destination: routes.definicoes.plano,
        permanent: false
    },
    {
        source: "/planeamento/budget",
        destination: routes.planeamento.orcamento,
        permanent: false
    },
    {
        source: "/planeamento/scenarios",
        destination: routes.planeamento.cenarios,
        permanent: false
    },
    {
        source: "/despesas/add",
        destination: routes.despesas.adicionar,
        permanent: false
    },
    {
        source: "/despesas/edit",
        destination: routes.despesas.editar,
        permanent: false
    },
    {
        source: "/despesas/list",
        destination: routes.despesas.lista,
        permanent: false
    },
    {
        source: "/despesas",
        destination: routes.despesas.lista,
        permanent: false
    },
    {
        source: "/despesas/:path*",
        destination: "/movimentos/:path*",
        permanent: false
    }
];
}),
"[project]/lib/profile-query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendProfileToHref",
    ()=>appendProfileToHref,
    "getProfileParam",
    ()=>getProfileParam,
    "setProfileParam",
    ()=>setProfileParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-ssr] (ecmascript)");
;
function getProfileParam(searchParams) {
    if (!searchParams) return null;
    return searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].profile) || searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].legacyProfile) || null;
}
function setProfileParam(searchParams, profile) {
    const params = new URLSearchParams(searchParams);
    params.delete(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].profile);
    params.delete(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].legacyProfile);
    if (profile) {
        params.set(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].profile, profile);
    }
    return params;
}
function appendProfileToHref(href, profile) {
    if (!profile) return href;
    const [pathname, existingQuery = ""] = href.split("?");
    const params = new URLSearchParams(existingQuery);
    params.delete(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].legacyProfile);
    params.set(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].profile, profile);
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
}
}),
"[project]/lib/finance-store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppStateProvider",
    ()=>AppStateProvider,
    "formatCurrency",
    ()=>formatCurrency,
    "formatMonthLabel",
    ()=>formatMonthLabel,
    "formatShortDate",
    ()=>formatShortDate,
    "useAppState",
    ()=>useAppState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/profile-query.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
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
                plan: "Plus"
            },
            preferences: {
                emailSummary: true,
                alerts: true,
                weekStartsOn: "Segunda-feira"
            },
            budgetLimits: {
                Habitação: 900,
                Alimentação: 320,
                Transportes: 120,
                Lazer: 90,
                Saúde: 80
            },
            expenses: [
                {
                    id: "pessoal-renda",
                    name: "Renda",
                    category: "Habitação",
                    amount: 850,
                    date: "2026-03-01",
                    kind: "fixed",
                    notes: "Pagamento mensal"
                },
                {
                    id: "pessoal-supermercado",
                    name: "Supermercado",
                    category: "Alimentação",
                    amount: 218,
                    date: "2026-03-02",
                    kind: "variable",
                    notes: "Compras da semana"
                },
                {
                    id: "pessoal-refeicoes",
                    name: "Refeições fora",
                    category: "Alimentação",
                    amount: 34,
                    date: "2026-03-08",
                    kind: "variable",
                    notes: "Almoço com amigos"
                },
                {
                    id: "pessoal-transportes",
                    name: "Transportes",
                    category: "Transportes",
                    amount: 42,
                    date: "2026-03-03",
                    kind: "variable",
                    notes: "Metro e autocarro"
                },
                {
                    id: "pessoal-streaming",
                    name: "Streaming",
                    category: "Lazer",
                    amount: 12,
                    date: "2026-03-03",
                    kind: "fixed",
                    notes: "Subscrição mensal"
                },
                {
                    id: "pessoal-farmacia",
                    name: "Farmácia",
                    category: "Saúde",
                    amount: 28,
                    date: "2026-03-06",
                    kind: "variable",
                    notes: "Cuidados pontuais"
                }
            ]
        },
        Estudante: {
            details: {
                name: "João Ribeiro",
                email: "joao@email.com",
                currency: "EUR",
                monthlyIncome: 980,
                plan: "Essencial"
            },
            preferences: {
                emailSummary: false,
                alerts: true,
                weekStartsOn: "Segunda-feira"
            },
            budgetLimits: {
                Propinas: 300,
                Alimentação: 220,
                Transportes: 45,
                Material: 70,
                Lazer: 60
            },
            expenses: [
                {
                    id: "estudante-propinas",
                    name: "Propinas",
                    category: "Propinas",
                    amount: 280,
                    date: "2026-03-01",
                    kind: "fixed",
                    notes: "Mensalidade da faculdade"
                },
                {
                    id: "estudante-supermercado",
                    name: "Supermercado",
                    category: "Alimentação",
                    amount: 184,
                    date: "2026-03-05",
                    kind: "variable",
                    notes: "Compras do mês"
                },
                {
                    id: "estudante-passe",
                    name: "Passe",
                    category: "Transportes",
                    amount: 32,
                    date: "2026-03-02",
                    kind: "fixed",
                    notes: "Passe mensal"
                },
                {
                    id: "estudante-livros",
                    name: "Livros",
                    category: "Material",
                    amount: 56,
                    date: "2026-03-07",
                    kind: "variable",
                    notes: "Material de apoio"
                },
                {
                    id: "estudante-cinema",
                    name: "Cinema",
                    category: "Lazer",
                    amount: 24,
                    date: "2026-03-09",
                    kind: "variable",
                    notes: "Saída ao fim de semana"
                }
            ]
        },
        "Família": {
            details: {
                name: "Família Costa",
                email: "familia@email.com",
                currency: "EUR",
                monthlyIncome: 3600,
                plan: "Pro"
            },
            preferences: {
                emailSummary: true,
                alerts: true,
                weekStartsOn: "Segunda-feira"
            },
            budgetLimits: {
                Habitação: 1200,
                Alimentação: 650,
                Educação: 250,
                Transportes: 220,
                Lazer: 180
            },
            expenses: [
                {
                    id: "familia-renda",
                    name: "Prestação da casa",
                    category: "Habitação",
                    amount: 1180,
                    date: "2026-03-01",
                    kind: "fixed",
                    notes: "Crédito habitação"
                },
                {
                    id: "familia-supermercado",
                    name: "Supermercado",
                    category: "Alimentação",
                    amount: 472,
                    date: "2026-03-04",
                    kind: "variable",
                    notes: "Compras semanais"
                },
                {
                    id: "familia-atividades",
                    name: "Atividades escolares",
                    category: "Educação",
                    amount: 210,
                    date: "2026-03-06",
                    kind: "variable",
                    notes: "Material e visitas"
                },
                {
                    id: "familia-combustivel",
                    name: "Combustível",
                    category: "Transportes",
                    amount: 146,
                    date: "2026-03-08",
                    kind: "variable",
                    notes: "Deslocações familiares"
                },
                {
                    id: "familia-lazer",
                    name: "Fim de semana",
                    category: "Lazer",
                    amount: 112,
                    date: "2026-03-09",
                    kind: "variable",
                    notes: "Passeio em família"
                }
            ]
        },
        Casa: {
            details: {
                name: "Casa Partilhada",
                email: "casa@email.com",
                currency: "EUR",
                monthlyIncome: 2900,
                plan: "Plus"
            },
            preferences: {
                emailSummary: true,
                alerts: true,
                weekStartsOn: "Segunda-feira"
            },
            budgetLimits: {
                Renda: 1100,
                Serviços: 240,
                Supermercado: 420,
                Reparações: 160,
                Outros: 120
            },
            expenses: [
                {
                    id: "casa-renda",
                    name: "Renda",
                    category: "Renda",
                    amount: 1100,
                    date: "2026-03-01",
                    kind: "fixed",
                    notes: "Pagamento mensal"
                },
                {
                    id: "casa-luz-gas",
                    name: "Luz e gás",
                    category: "Serviços",
                    amount: 164,
                    date: "2026-03-05",
                    kind: "fixed",
                    notes: "Débito direto"
                },
                {
                    id: "casa-supermercado",
                    name: "Supermercado",
                    category: "Supermercado",
                    amount: 338,
                    date: "2026-03-07",
                    kind: "variable",
                    notes: "Compras partilhadas"
                },
                {
                    id: "casa-reparacao",
                    name: "Canalizador",
                    category: "Reparações",
                    amount: 92,
                    date: "2026-03-10",
                    kind: "variable",
                    notes: "Arranjo da cozinha"
                },
                {
                    id: "casa-outros",
                    name: "Produtos de limpeza",
                    category: "Outros",
                    amount: 38,
                    date: "2026-03-11",
                    kind: "variable",
                    notes: "Reposição mensal"
                }
            ]
        }
    }
};
const AppStateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function cloneDefaultState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}
function cloneDefaultProfile(profileName) {
    const fallbackState = cloneDefaultState();
    return fallbackState.profiles[profileName] ? JSON.parse(JSON.stringify(fallbackState.profiles[profileName])) : null;
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
        maximumFractionDigits: 2
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
        month: "2-digit"
    }).format(nextDate);
}
function formatMonthLabel(value) {
    const nextDate = value ? new Date(value) : new Date();
    return new Intl.DateTimeFormat("pt-PT", {
        month: "long",
        year: "numeric"
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
        notes: (expense.notes || "").trim()
    };
}
function normalizeProfile(profile, fallbackProfile) {
    const details = {
        ...fallbackProfile.details,
        ...profile?.details || {},
        monthlyIncome: roundAmount(profile?.details?.monthlyIncome ?? fallbackProfile.details.monthlyIncome)
    };
    const preferences = {
        ...fallbackProfile.preferences,
        ...profile?.preferences || {}
    };
    const budgetLimits = {
        ...fallbackProfile.budgetLimits,
        ...profile?.budgetLimits || {}
    };
    const firstCategory = Object.keys(budgetLimits)[0] || "Outros";
    const expenses = Array.isArray(profile?.expenses) ? profile.expenses.map((expense)=>buildExpense(expense, firstCategory)).filter(Boolean) : fallbackProfile.expenses.map((expense)=>({
            ...expense
        }));
    return {
        details,
        preferences,
        budgetLimits,
        expenses
    };
}
function normalizeState(candidate) {
    const fallbackState = cloneDefaultState();
    if (!candidate || typeof candidate !== "object") {
        return fallbackState;
    }
    const profiles = Object.fromEntries(Object.entries(fallbackState.profiles).map(([profileName, profile])=>[
            profileName,
            normalizeProfile(candidate.profiles?.[profileName], profile)
        ]));
    const selectedProfile = candidate.selectedProfile && profiles[candidate.selectedProfile] ? candidate.selectedProfile : fallbackState.selectedProfile;
    return {
        selectedProfile,
        profiles
    };
}
function calculateCategoryBreakdown(profile) {
    const categories = new Set([
        ...Object.keys(profile.budgetLimits),
        ...profile.expenses.map((expense)=>expense.category)
    ]);
    const currency = profile.details.currency;
    return Array.from(categories).map((category)=>{
        const limit = roundAmount(profile.budgetLimits[category] ?? 0);
        const spent = roundAmount(profile.expenses.filter((expense)=>expense.category === category).reduce((sum, expense)=>sum + expense.amount, 0));
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
            progressLabel: `${Math.round(progress * 100)}%`
        };
    }).sort((left, right)=>right.spent - left.spent || right.limit - left.limit);
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
            scenarios: []
        };
    }
    const currency = profile.details.currency;
    const latestExpenses = [
        ...profile.expenses
    ].sort((left, right)=>new Date(right.date) - new Date(left.date)).map((expense)=>({
            ...expense,
            amountLabel: formatCurrency(expense.amount, currency),
            dateLabel: formatShortDate(expense.date)
        }));
    const totalSpent = roundAmount(latestExpenses.reduce((sum, expense)=>sum + expense.amount, 0));
    const totalBudget = roundAmount(Object.values(profile.budgetLimits).reduce((sum, limit)=>sum + roundAmount(limit), 0));
    const fixedSpent = roundAmount(latestExpenses.filter((expense)=>expense.kind === "fixed").reduce((sum, expense)=>sum + expense.amount, 0));
    const variableSpent = roundAmount(totalSpent - fixedSpent);
    const remainingIncome = roundAmount(profile.details.monthlyIncome - totalSpent);
    const categoryBreakdown = calculateCategoryBreakdown(profile);
    const alertCategories = categoryBreakdown.filter((entry)=>entry.progress >= 0.75 && entry.spent > 0);
    const overBudgetCategories = alertCategories.filter((entry)=>entry.limit > 0 && entry.spent > entry.limit);
    const topCategory = categoryBreakdown[0] || null;
    const primaryAlert = overBudgetCategories[0] || alertCategories[0] || null;
    const monthLabel = formatMonthLabel(latestExpenses[0]?.date);
    const extraIncome = Math.max(150, Math.round(profile.details.monthlyIncome * 0.08));
    const variableReduction = Math.round(variableSpent * 0.15);
    const housingCategory = categoryBreakdown.find((entry)=>/habitação|renda/i.test(entry.category)) || topCategory;
    const housingIncrease = Math.max(40, Math.round((housingCategory?.spent || totalSpent || 0) * 0.1));
    const insights = [];
    if (primaryAlert) {
        insights.push(`${primaryAlert.category} já consumiu ${primaryAlert.progressLabel} do limite.`);
    }
    if (remainingIncome >= 0) {
        insights.push(`Mantém ${formatCurrency(remainingIncome, currency)} de margem face ao rendimento mensal.`);
    } else {
        insights.push(`Está ${formatCurrency(Math.abs(remainingIncome), currency)} acima do rendimento mensal definido.`);
    }
    if (topCategory) {
        insights.push(`${topCategory.category} é a categoria com maior peso: ${topCategory.spentLabel}.`);
    }
    const scenarios = [
        {
            id: "tight-month",
            title: "Mês apertado",
            description: variableReduction > 0 ? `Se reduzir 15% das despesas variáveis, liberta ${formatCurrency(variableReduction, currency)} e a margem sobe para ${formatCurrency(remainingIncome + variableReduction, currency)}.` : "Sem despesas variáveis suficientes para gerar uma poupança relevante.",
            impactLabel: formatSignedCurrency(variableReduction, currency),
            marginAfterLabel: formatCurrency(remainingIncome + variableReduction, currency),
            tone: "positive"
        },
        {
            id: "extra-income",
            title: "Rendimento extra",
            description: `Com um reforço pontual de ${formatCurrency(extraIncome, currency)}, a margem disponível passa para ${formatCurrency(remainingIncome + extraIncome, currency)}.`,
            impactLabel: formatSignedCurrency(extraIncome, currency),
            marginAfterLabel: formatCurrency(remainingIncome + extraIncome, currency),
            tone: "positive"
        },
        {
            id: "rent-increase",
            title: "Aumento da renda",
            description: housingCategory ? `Se ${housingCategory.category.toLowerCase()} subir ${formatCurrency(housingIncrease, currency)}, a margem desce para ${formatCurrency(remainingIncome - housingIncrease, currency)}.` : "Sem categoria principal para simular um aumento estrutural.",
            impactLabel: formatSignedCurrency(-housingIncrease, currency),
            marginAfterLabel: formatCurrency(remainingIncome - housingIncrease, currency),
            tone: "negative"
        }
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
        alertCategoryNames: alertCategories.map((entry)=>entry.category),
        topCategory,
        latestExpenses,
        insights,
        primaryAlert,
        scenarios
    };
}
function AppStateProvider({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>cloneDefaultState());
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const storedState = window.localStorage.getItem(STORAGE_KEY);
            if (storedState) {
                setState(normalizeState(JSON.parse(storedState)));
            }
        } catch  {
            setState(cloneDefaultState());
        } finally{
            setIsHydrated(true);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHydrated) {
            return;
        }
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [
        isHydrated,
        state
    ]);
    const updateState = (updater)=>{
        setState((currentState)=>{
            const nextState = typeof updater === "function" ? updater(currentState) : updater;
            if (isHydrated) {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
            }
            return nextState;
        });
    };
    const profileFromQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfileParam"])(searchParams);
    const activeProfileName = profileFromQuery && state.profiles[profileFromQuery] && profileFromQuery || (state.selectedProfile && state.profiles[state.selectedProfile] ? state.selectedProfile : null);
    const activeProfile = activeProfileName ? state.profiles[activeProfileName] : null;
    const activeProfileSnapshot = calculateProfileSnapshot(activeProfile);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profileFromQuery && state.profiles[profileFromQuery] && state.selectedProfile !== profileFromQuery) {
            setState((currentState)=>{
                const nextState = {
                    ...currentState,
                    selectedProfile: profileFromQuery
                };
                if (isHydrated) {
                    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
                }
                return nextState;
            });
        }
    }, [
        profileFromQuery,
        state.profiles,
        state.selectedProfile,
        isHydrated
    ]);
    const syncProfileInUrl = (profileName)=>{
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProfileParam"])(searchParams, profileName);
        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname, {
            scroll: false
        });
    };
    const setActiveProfile = (profileName)=>{
        if (profileName && !state.profiles[profileName]) {
            return;
        }
        updateState((currentState)=>({
                ...currentState,
                selectedProfile: profileName
            }));
        syncProfileInUrl(profileName);
    };
    const clearActiveProfile = ()=>{
        setActiveProfile(null);
    };
    const buildHref = (href, profileName = activeProfileName)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendProfileToHref"])(href, profileName);
    const addExpense = (input)=>{
        const profileName = input.profileName || activeProfileName;
        if (!profileName || !state.profiles[profileName]) {
            return null;
        }
        const fallbackCategory = Object.keys(state.profiles[profileName].budgetLimits)[0] || "Outros";
        const nextExpense = buildExpense(input, fallbackCategory);
        if (!nextExpense) {
            return null;
        }
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: {
                        ...currentState.profiles[profileName],
                        expenses: [
                            nextExpense,
                            ...currentState.profiles[profileName].expenses
                        ]
                    }
                }
            }));
        return nextExpense.id;
    };
    const updateExpense = (profileName, expenseId, input)=>{
        if (!profileName || !expenseId || !state.profiles[profileName]) {
            return;
        }
        const fallbackCategory = Object.keys(state.profiles[profileName].budgetLimits)[0] || "Outros";
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: {
                        ...currentState.profiles[profileName],
                        expenses: currentState.profiles[profileName].expenses.map((expense)=>{
                            if (expense.id !== expenseId) {
                                return expense;
                            }
                            return buildExpense({
                                ...expense,
                                ...input
                            }, fallbackCategory) || expense;
                        })
                    }
                }
            }));
    };
    const deleteExpense = (profileName, expenseId)=>{
        if (!profileName || !expenseId || !state.profiles[profileName]) {
            return;
        }
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: {
                        ...currentState.profiles[profileName],
                        expenses: currentState.profiles[profileName].expenses.filter((expense)=>expense.id !== expenseId)
                    }
                }
            }));
    };
    const updateBudgetLimit = (profileName, category, nextLimit)=>{
        if (!profileName || !category || !state.profiles[profileName]) {
            return;
        }
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: {
                        ...currentState.profiles[profileName],
                        budgetLimits: {
                            ...currentState.profiles[profileName].budgetLimits,
                            [category]: Math.max(0, roundAmount(nextLimit))
                        }
                    }
                }
            }));
    };
    const updateProfileDetails = (profileName, nextDetails)=>{
        if (!profileName || !state.profiles[profileName]) {
            return;
        }
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: {
                        ...currentState.profiles[profileName],
                        details: {
                            ...currentState.profiles[profileName].details,
                            ...nextDetails,
                            monthlyIncome: roundAmount(nextDetails.monthlyIncome ?? currentState.profiles[profileName].details.monthlyIncome)
                        }
                    }
                }
            }));
    };
    const updateProfilePlan = (profileName, nextPlan)=>{
        if (!profileName || !nextPlan || !state.profiles[profileName]) {
            return;
        }
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: {
                        ...currentState.profiles[profileName],
                        details: {
                            ...currentState.profiles[profileName].details,
                            plan: nextPlan
                        }
                    }
                }
            }));
    };
    const resetProfile = (profileName)=>{
        const nextProfile = cloneDefaultProfile(profileName);
        if (!profileName || !nextProfile || !state.profiles[profileName]) {
            return;
        }
        updateState((currentState)=>({
                ...currentState,
                profiles: {
                    ...currentState.profiles,
                    [profileName]: nextProfile
                }
            }));
    };
    const resetAllData = ()=>{
        const fallbackState = cloneDefaultState();
        updateState({
            ...fallbackState,
            selectedProfile: activeProfileName || fallbackState.selectedProfile
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
        resetAllData
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppStateContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/finance-store.js",
        lineNumber: 952,
        columnNumber: 10
    }, this);
}
function useAppState() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppStateContext);
    if (!context) {
        throw new Error("useAppState must be used within AppStateProvider.");
    }
    return context;
}
;
}),
"[project]/messages/pt-PT/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "breadcrumbs",
    ()=>breadcrumbs,
    "emptyProfileState",
    ()=>emptyProfileState,
    "metadata",
    ()=>metadata,
    "navigation",
    ()=>navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-ssr] (ecmascript)");
;
const metadata = {
    title: "baseZero - Clareza para gerir o dinheiro",
    description: "Uma experiência simples para gerir o fluxo de caixa com clareza."
};
const emptyProfileState = {
    title: "Escolha um perfil para continuar",
    description: "O perfil ativo define o contexto da navegação, das despesas e do orçamento. Selecione um perfil no painel para trabalhar com dados reais.",
    action: "Abrir painel"
};
const navigation = {
    label: "Navegação",
    profilePrefix: "Perfil",
    clearLabel: "limpar",
    items: [
        {
            label: "Painel",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].visao.painel
        },
        {
            label: "Lista",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].despesas.lista
        },
        {
            label: "Adicionar",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
        },
        {
            label: "Editar",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].despesas.editar
        },
        {
            label: "Orçamento",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
        },
        {
            label: "Cenários",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].planeamento.cenarios
        },
        {
            label: "Perfil",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
        },
        {
            label: "Plano",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
        }
    ]
};
const breadcrumbs = {
    label: "Localização",
    activeProfilePrefix: "Perfil ativo",
    segmentLabels: {
        visao: "Visão",
        painel: "Painel",
        despesas: "Despesas",
        lista: "Lista",
        adicionar: "Adicionar",
        editar: "Editar",
        planeamento: "Planeamento",
        orcamento: "Orçamento",
        cenarios: "Cenários",
        definicoes: "Definições",
        perfil: "Perfil",
        plano: "Plano"
    }
};
}),
"[project]/app/(app)/_components/nav.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { activeProfileName, buildHref, clearActiveProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-black/10 bg-white/70 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4 text-xs md:px-10",
            children: [
                activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: clearActiveProfile,
                    className: "rounded-full border border-emerald-200/70 bg-emerald-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:-translate-y-0.5",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].profilePrefix,
                        ": ",
                        activeProfileName,
                        " (",
                        __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].clearLabel,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/_components/nav.js",
                    lineNumber: 16,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].items.map((item)=>{
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: buildHref(item.href),
                            "aria-current": isActive ? "page" : undefined,
                            className: `rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:bg-white ${isActive ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-800" : "border-black/10 bg-white/80 text-slate-600"}`,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/app/(app)/_components/nav.js",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/nav.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/_components/nav.js",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/_components/nav.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(app)/_components/breadcrumbs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const formatSegment = (segment)=>__TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breadcrumbs"].segmentLabels[segment] || segment.replace(/-/g, " ");
function Breadcrumbs() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { activeProfileName, buildHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppState"])();
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return null;
    const crumbs = segments.map((segment, index)=>{
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        return {
            label: formatSegment(segment),
            href: buildHref(href),
            isLast: index === segments.length - 1
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 pt-6 text-xs md:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400",
                children: crumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            crumb.isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-black/10 bg-white/80 px-3 py-1 text-slate-600",
                                children: crumb.label
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/_components/breadcrumbs.js",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: crumb.href,
                                className: "rounded-full border border-black/10 bg-white/70 px-3 py-1 text-slate-500 transition hover:-translate-y-0.5 hover:bg-white",
                                children: crumb.label
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/_components/breadcrumbs.js",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            index < crumbs.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/_components/breadcrumbs.js",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, crumb.href, true, {
                        fileName: "[project]/app/(app)/_components/breadcrumbs.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/_components/breadcrumbs.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full border border-emerald-200/70 bg-emerald-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["breadcrumbs"].activeProfilePrefix,
                    ": ",
                    activeProfileName
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/_components/breadcrumbs.js",
                lineNumber: 51,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/_components/breadcrumbs.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(app)/_components/app-shell.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/_components/nav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/_components/breadcrumbs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AppShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppStateProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/_components/app-shell.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/_components/app-shell.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/app-shell.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/_components/app-shell.js",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/_components/app-shell.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9f0e6a7d._.js.map