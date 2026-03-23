(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config/routes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        root: "/despesas",
        lista: "/despesas/lista",
        adicionar: "/despesas/adicionar",
        editar: "/despesas/editar"
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
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/profile-query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendProfileToHref",
    ()=>appendProfileToHref,
    "getProfileParam",
    ()=>getProfileParam,
    "setProfileParam",
    ()=>setProfileParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
;
function getProfileParam(searchParams) {
    if (!searchParams) return null;
    return searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].profile) || searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].legacyProfile) || null;
}
function setProfileParam(searchParams, profile) {
    const params = new URLSearchParams(searchParams);
    params.delete(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].profile);
    params.delete(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].legacyProfile);
    if (profile) {
        params.set(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].profile, profile);
    }
    return params;
}
function appendProfileToHref(href, profile) {
    if (!profile) return href;
    const [pathname, existingQuery = ""] = href.split("?");
    const params = new URLSearchParams(existingQuery);
    params.delete(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].legacyProfile);
    params.set(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].profile, profile);
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/finance-store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/profile-query.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
const AppStateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
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
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AppStateProvider.useState": ()=>cloneDefaultState()
    }["AppStateProvider.useState"]);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppStateProvider.useEffect": ()=>{
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
        }
    }["AppStateProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppStateProvider.useEffect": ()=>{
            if (!isHydrated) {
                return;
            }
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
    }["AppStateProvider.useEffect"], [
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
    const profileFromQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProfileParam"])(searchParams);
    const activeProfileName = profileFromQuery && state.profiles[profileFromQuery] && profileFromQuery || (state.selectedProfile && state.profiles[state.selectedProfile] ? state.selectedProfile : null);
    const activeProfile = activeProfileName ? state.profiles[activeProfileName] : null;
    const activeProfileSnapshot = calculateProfileSnapshot(activeProfile);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppStateProvider.useEffect": ()=>{
            if (profileFromQuery && state.profiles[profileFromQuery] && state.selectedProfile !== profileFromQuery) {
                setState({
                    "AppStateProvider.useEffect": (currentState)=>{
                        const nextState = {
                            ...currentState,
                            selectedProfile: profileFromQuery
                        };
                        if (isHydrated) {
                            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
                        }
                        return nextState;
                    }
                }["AppStateProvider.useEffect"]);
            }
        }
    }["AppStateProvider.useEffect"], [
        profileFromQuery,
        state.profiles,
        state.selectedProfile,
        isHydrated
    ]);
    const syncProfileInUrl = (profileName)=>{
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setProfileParam"])(searchParams, profileName);
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
    const buildHref = (href, profileName = activeProfileName)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendProfileToHref"])(href, profileName);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppStateContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/finance-store.js",
        lineNumber: 952,
        columnNumber: 10
    }, this);
}
_s(AppStateProvider, "Rtpqi49bstp3cT/z19m/47jZVyE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AppStateProvider;
function useAppState() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppStateContext);
    if (!context) {
        throw new Error("useAppState must be used within AppStateProvider.");
    }
    return context;
}
_s1(useAppState, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
var _c;
__turbopack_context__.k.register(_c, "AppStateProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/messages/pt-PT/common.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
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
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].visao.painel
        },
        {
            label: "Lista",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.lista
        },
        {
            label: "Adicionar",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
        },
        {
            label: "Editar",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.editar
        },
        {
            label: "Orçamento",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
        },
        {
            label: "Cenários",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.cenarios
        },
        {
            label: "Perfil",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
        },
        {
            label: "Plano",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/nav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NavBar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { activeProfileName, buildHref, clearActiveProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-black/10 bg-white/70 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-6 py-4 text-xs md:px-10",
            children: [
                activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: clearActiveProfile,
                    className: "rounded-full border border-emerald-200/70 bg-emerald-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:-translate-y-0.5",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].profilePrefix,
                        ": ",
                        activeProfileName,
                        " (",
                        __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].clearLabel,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/nav.js",
                    lineNumber: 16,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].items.map((item)=>{
                        const isActive = pathname === item.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: buildHref(item.href),
                            "aria-current": isActive ? "page" : undefined,
                            className: `rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:bg-white ${isActive ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-800" : "border-black/10 bg-white/80 text-slate-600"}`,
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/app/(app)/nav.js",
                            lineNumber: 28,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/(app)/nav.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/nav.js",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/nav.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(NavBar, "MSdHEvnZmHGx0wIsR1RgSk8TRrA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/breadcrumbs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const formatSegment = (segment)=>__TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breadcrumbs"].segmentLabels[segment] || segment.replace(/-/g, " ");
function Breadcrumbs() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { activeProfileName, buildHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 pt-6 text-xs md:px-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400",
                children: crumbs.map((crumb, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            crumb.isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-black/10 bg-white/80 px-3 py-1 text-slate-600",
                                children: crumb.label
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/breadcrumbs.js",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: crumb.href,
                                className: "rounded-full border border-black/10 bg-white/70 px-3 py-1 text-slate-500 transition hover:-translate-y-0.5 hover:bg-white",
                                children: crumb.label
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/breadcrumbs.js",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this),
                            index < crumbs.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/breadcrumbs.js",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, crumb.href, true, {
                        fileName: "[project]/app/(app)/breadcrumbs.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/breadcrumbs.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full border border-emerald-200/70 bg-emerald-100/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breadcrumbs"].activeProfilePrefix,
                    ": ",
                    activeProfileName
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/breadcrumbs.js",
                lineNumber: 51,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/breadcrumbs.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Breadcrumbs, "qxs2i8nI+lnPlOg50IA5Emg0OHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = Breadcrumbs;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/app-shell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/nav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function AppShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppStateProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/app-shell.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/(app)/app-shell.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(app)/app-shell.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/app-shell.js",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/app-shell.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_66bdfdda._.js.map