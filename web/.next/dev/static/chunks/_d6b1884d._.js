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
"[project]/messages/pt-PT/vision.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "budgetOptions",
    ()=>budgetOptions,
    "categoryTones",
    ()=>categoryTones,
    "dashboardCopy",
    ()=>dashboardCopy,
    "defaultCategories",
    ()=>defaultCategories,
    "steps",
    ()=>steps,
    "useCaseWindowCopy",
    ()=>useCaseWindowCopy,
    "useCaseWindows",
    ()=>useCaseWindows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
;
;
const dashboardCopy = {
    badge: "Painel inicial",
    title: "finanças em decisões, dinheiro com clareza",
    description: "Esta página foca-se no essencial: escolher um perfil, aceder às ações principais e começar a registar sem ruído.",
    primaryActionLabel: "Adicionar despesa",
    secondaryActionLabel: "Ver despesas",
    activeProfileLabel: "Perfil ativo",
    noProfileSelected: "Não selecionado",
    coreActionsTitle: "Ações principais",
    coreActionsDescription: "Apenas os pontos de entrada essenciais.",
    summaryTitle: "Leituras do mês",
    summaryDescription: "Métricas reais derivadas do perfil ativo.",
    summaryCards: {
        spent: "Gasto do mês",
        budget: "Orçamento planeado",
        margin: "Margem disponível",
        topCategory: "Categoria mais pressionada"
    },
    emptyStateTitle: "Escolha um perfil para ver métricas reais.",
    emptyStateDescription: "Assim que um perfil estiver ativo, o painel passa a refletir despesas, orçamento e cenários persistidos.",
    insightsTitle: "Sinais do mês",
    insightsDescription: "Alertas e movimentos recentes do perfil ativo.",
    alertsTitle: "Alertas orçamentais",
    alertsFallback: "Sem alertas críticos neste momento.",
    categoryBreakdownTitle: "Pressão por categoria",
    latestExpensesTitle: "Movimentos recentes",
    latestExpensesEmpty: "Sem despesas registadas.",
    noTopCategory: "Sem dados",
    profileSectionTitle: "Escolher um perfil",
    profileSectionDescription: "Escolha um perfil para manter o contexto de navegação consistente.",
    quickStartTitle: "Início rápido",
    stepLabelPrefix: "Passo",
    coreActions: [
        {
            title: "Adicionar despesa",
            description: "Registe uma nova transação com valor, data e categoria.",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar,
            cta: "Abrir formulário"
        },
        {
            title: "Ver despesas",
            description: "Reveja os registos mensais e detete alterações rapidamente.",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.lista,
            cta: "Abrir lista"
        },
        {
            title: "Definir orçamento",
            description: "Ajuste limites e mantenha o plano de despesas realista.",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento,
            cta: "Abrir orçamento"
        }
    ]
};
const budgetOptions = [
    {
        title: "Pessoal",
        description: "Planeie as despesas do dia a dia, defina objetivos e veja o saldo rapidamente.",
        tag: "Dia a dia",
        sticker: "#ffd6a5",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "8.5",
                    r: "3.2"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 19.5c1.6-3 4-4.5 7-4.5s5.4 1.5 7 4.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Estudante",
        description: "Acompanhe propinas, renda e pequenas despesas com lembretes inteligentes.",
        tag: "Campus",
        sticker: "#b8f2e6",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9.5l9-4 9 4-9 4-9-4z"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 13.5v3.5c0 1.2 2.5 2.5 5 2.5s5-1.3 5-2.5v-3.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 9.5v5.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 90,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Família",
        description: "Coordene contas partilhadas, objetivos e mesadas num único lugar.",
        tag: "Partilhado",
        sticker: "#bcd4ff",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8",
                    cy: "9",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "16",
                    cy: "9",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.5 19.5c1-2.5 3-4 5-4"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 125,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.5 19.5c-1-2.5-3-4-5-4"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.5 19.5c1.1-3 3-4.5 4.5-4.5s3.4 1.5 4.5 4.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 113,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Casa",
        description: "Gira despesas recorrentes e divida custos com clareza.",
        tag: "Lar",
        sticker: "#ffc8dd",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 10.5l8-6 8 6"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 147,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.5 9.5v9h11v-9"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 18.5v-4h4v4"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 137,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const defaultCategories = [
    {
        title: "Casa",
        items: [
            "Hipoteca/Renda",
            "Reparações da casa",
            "Seguro da casa",
            "Produtos para a casa",
            "Supermercado"
        ]
    },
    {
        title: "Lazer",
        items: [
            "Entretenimento",
            "Férias",
            "Refeições fora",
            "Subscrições",
            "Outros gastos de lazer"
        ]
    },
    {
        title: "Serviços",
        items: [
            "Eletricidade",
            "Água",
            "Gás",
            "Telemóvel",
            "TV",
            "Internet"
        ]
    },
    {
        title: "Educação",
        items: [
            "Propinas",
            "Livros",
            "Cursos/Conferências",
            "Refeições",
            "Poupança para estudos",
            "Crédito estudantil"
        ]
    },
    {
        title: "Transportes",
        items: [
            "Combustível",
            "Manutenção automóvel",
            "Taxas automóvel",
            "Transportes públicos",
            "Estacionamento/Portagens",
            "Seguro automóvel",
            "Prestação automóvel",
            "Outros"
        ]
    },
    {
        title: "Pessoal",
        items: [
            "Roupa",
            "Beleza/Bem-estar",
            "Fitness/Desporto",
            "Saúde",
            "Outros"
        ]
    },
    {
        title: "Finanças",
        items: [
            "Cartão de crédito",
            "Prestações de empréstimos",
            "Comissões bancárias",
            "Impostos",
            "Investimentos",
            "Contribuições para reforma"
        ]
    },
    {
        title: "Despesas do negócio",
        items: [
            "Espaço de escritório",
            "Serviços",
            "Salários",
            "Benefícios dos colaboradores",
            "Marketing",
            "Viagens"
        ]
    }
];
const categoryTones = [
    "#fff1d6",
    "#e7f9f2",
    "#e8f1ff",
    "#ffe9f2",
    "#f4ffe2",
    "#e7f7ff",
    "#fff0dd",
    "#e9f1ff"
];
const steps = [
    {
        title: "Escolher um perfil",
        description: "Escolha o perfil que melhor combina com o seu dia a dia.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 6.5h16"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 264,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 12h16"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 265,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 17.5h10"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 266,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 254,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Registar valor e data",
        description: "Adicione o custo e o dia em que aconteceu. Fica feito em segundos.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3.5",
                    y: "5",
                    width: "17",
                    height: "15",
                    rx: "2.5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 285,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 3.5v3"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 286,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 3.5v3"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 287,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.5 12h4"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 288,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.5 15.5h8"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 289,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 275,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Rever tendências",
        description: "Identifique padrões, reduza surpresas e planeie com antecedência.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "h-5 w-5 text-white",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 18.5h16"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 18.5v-7"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 309,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 18.5v-10"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 310,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 18.5v-5"
                }, void 0, false, {
                    fileName: "[project]/messages/pt-PT/vision.js",
                    lineNumber: 311,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/messages/pt-PT/vision.js",
            lineNumber: 298,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const useCaseWindowCopy = {
    active: "Ativo",
    activate: "Ativar",
    stepsSuffix: "etapas"
};
const useCaseWindows = [
    {
        title: "Pessoal",
        subtitle: "Fluxo pessoal com controlo rápido.",
        tag: "Dia a dia",
        sticker: "#ffd6a5",
        cases: [
            {
                title: "Criar conta / iniciar sessão",
                meta: "Email ou biometria.",
                tag: "Acesso",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
            },
            {
                title: "Configuração inicial",
                meta: "Renda, alimentação e transportes.",
                tag: "Configuração",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Registar despesas",
                meta: "Manual e rápido.",
                tag: "Despesa",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
            },
            {
                title: "Ver resumo mensal",
                meta: "Saldo, categorias e alertas simples.",
                tag: "Resumo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].visao.painel
            },
            {
                title: "Definir 1-2 objetivos",
                meta: "Ex.: manter a alimentação abaixo de X.",
                tag: "Objetivo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Exportar / partilhar",
                meta: "Resumo simples e limitado.",
                tag: "Partilhar",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
            }
        ]
    },
    {
        title: "Estudante",
        subtitle: "Pensado para propinas e rotinas de estudante.",
        tag: "Campus",
        sticker: "#b8f2e6",
        cases: [
            {
                title: "Criar conta / iniciar sessão",
                meta: "Email académico ou telemóvel.",
                tag: "Acesso",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
            },
            {
                title: "Configuração inicial",
                meta: "Propinas, renda e alimentação.",
                tag: "Configuração",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Registar despesas",
                meta: "Lanches, transportes e lazer.",
                tag: "Despesa",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
            },
            {
                title: "Ver resumo mensal",
                meta: "Saldo e alertas de fim de mês.",
                tag: "Resumo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].visao.painel
            },
            {
                title: "Definir 1-2 objetivos",
                meta: "Ex.: limite mensal para alimentação.",
                tag: "Objetivo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Exportar / partilhar",
                meta: "Resumo para pais ou bolsas.",
                tag: "Partilhar",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
            }
        ]
    },
    {
        title: "Família",
        subtitle: "Despesas e objetivos partilhados para todos.",
        tag: "Partilhado",
        sticker: "#bcd4ff",
        cases: [
            {
                title: "Criar conta / iniciar sessão",
                meta: "Convidar membros da família.",
                tag: "Acesso",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
            },
            {
                title: "Configuração inicial",
                meta: "Contas partilhadas, escola e saúde.",
                tag: "Configuração",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Registar despesas",
                meta: "Compras, atividades e extras.",
                tag: "Despesa",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
            },
            {
                title: "Ver resumo mensal",
                meta: "Categorias e alertas simples.",
                tag: "Resumo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].visao.painel
            },
            {
                title: "Definir 1-2 objetivos",
                meta: "Ex.: limite de despesa em supermercado.",
                tag: "Objetivo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Exportar / partilhar",
                meta: "Resumo simples para todos.",
                tag: "Partilhar",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
            }
        ]
    },
    {
        title: "Casa",
        subtitle: "Custos domésticos com partilha rápida.",
        tag: "Lar",
        sticker: "#ffc8dd",
        cases: [
            {
                title: "Criar conta / iniciar sessão",
                meta: "Iniciar sessão e ligar a casa.",
                tag: "Acesso",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
            },
            {
                title: "Configuração inicial",
                meta: "Renda, serviços e internet.",
                tag: "Configuração",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Registar despesas",
                meta: "Contas e compras para a casa.",
                tag: "Despesa",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
            },
            {
                title: "Ver resumo mensal",
                meta: "Saldo e custos partilhados.",
                tag: "Resumo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].visao.painel
            },
            {
                title: "Definir 1-2 objetivos",
                meta: "Ex.: reduzir a despesa energética.",
                tag: "Objetivo",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
            },
            {
                title: "Exportar / partilhar",
                meta: "Resumo simples para partilhar.",
                tag: "Partilhar",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/visao/data.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/vision.js [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/visao/painel/dashboard-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$visao$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/(app)/visao/data.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/vision.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DashboardClient() {
    _s();
    const { activeProfileName, activeProfileSnapshot, setActiveProfile, buildHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const summaryCards = [
        {
            label: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].summaryCards.spent,
            value: activeProfileSnapshot.totalSpentLabel,
            helper: activeProfileSnapshot.monthLabel
        },
        {
            label: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].summaryCards.budget,
            value: activeProfileSnapshot.totalBudgetLabel,
            helper: `${activeProfileSnapshot.categoryBreakdown.length} categorias`
        },
        {
            label: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].summaryCards.margin,
            value: activeProfileSnapshot.remainingIncomeLabel,
            helper: `${activeProfileSnapshot.fixedSpentLabel} fixas · ${activeProfileSnapshot.variableSpentLabel} variáveis`
        },
        {
            label: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].summaryCards.topCategory,
            value: activeProfileSnapshot.topCategory?.category || __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].noTopCategory,
            helper: activeProfileSnapshot.topCategory ? `${activeProfileSnapshot.topCategory.spentLabel} · ${activeProfileSnapshot.topCategory.progressLabel} do limite` : __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].emptyStateDescription
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-transparent text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,111,104,0.15),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(255,214,165,0.25),transparent_35%)]"
            }, void 0, false, {
                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-3xl border border-black/10 bg-white/85 p-8 shadow-xl shadow-black/5 backdrop-blur",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].badge
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-semibold leading-tight text-slate-900 md:text-5xl font-[var(--font-display)]",
                                            style: {
                                                fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-2xl text-base leading-relaxed text-slate-600",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].description
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: buildHref(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar),
                                                    className: "inline-flex h-11 items-center justify-center rounded-full bg-[#0f6f68] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0c5c57]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].primaryActionLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: buildHref(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.lista),
                                                    className: "inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].secondaryActionLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-200/70 bg-emerald-50/80 px-4 py-3 text-right text-sm text-emerald-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].activeProfileLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-lg font-semibold",
                                            children: activeProfileName || __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].noProfileSelected
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-semibold text-slate-900 font-[var(--font-display)]",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].summaryTitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-sm text-slate-500",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].summaryDescription
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                        children: activeProfileSnapshot.monthLabel
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
                                children: summaryCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                children: card.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-2xl font-semibold text-slate-900",
                                                children: card.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-relaxed text-slate-600",
                                                children: card.helper
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, card.label, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 rounded-3xl border border-dashed border-black/10 bg-white/80 p-6 text-sm text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold text-slate-900",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].emptyStateTitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-2xl leading-relaxed",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].emptyStateDescription
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold text-slate-900 font-[var(--font-display)]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].coreActionsTitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].coreActionsDescription
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-4 md:grid-cols-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].coreActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-slate-900",
                                                children: action.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-relaxed text-slate-600",
                                                children: action.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: buildHref(action.href),
                                                className: "mt-4 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:-translate-y-0.5",
                                                children: action.cta
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, action.title, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-slate-900 font-[var(--font-display)]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].profileSectionTitle
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-500",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].profileSectionDescription
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-4 md:grid-cols-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["budgetOptions"].map((option)=>{
                                    const isActive = activeProfileName === option.title;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveProfile(isActive ? null : option.title),
                                        "aria-pressed": isActive,
                                        className: `rounded-3xl border bg-white/85 p-5 text-left shadow-md shadow-black/5 transition hover:-translate-y-0.5 ${isActive ? "border-emerald-300 ring-2 ring-emerald-300/60" : "border-black/10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -left-1 -top-1 h-10 w-10 rounded-2xl",
                                                                style: {
                                                                    backgroundColor: option.sticker
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f6f68] text-white",
                                                                children: option.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                        children: option.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 text-lg font-semibold text-slate-900",
                                                children: option.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-slate-600",
                                                children: option.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, option.title, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-semibold text-slate-900 font-[var(--font-display)]",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].insightsTitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-slate-500",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].insightsDescription
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].alertsTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-3",
                                                        children: activeProfileSnapshot.alertCategories.length > 0 ? activeProfileSnapshot.alertCategories.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `rounded-2xl border px-4 py-3 ${entry.status === "critical" ? "border-rose-200 bg-rose-50/80 text-rose-800" : "border-amber-200 bg-amber-50/80 text-amber-800"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold",
                                                                                children: entry.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                                lineNumber: 249,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full border border-current/10 bg-white/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
                                                                                children: entry.progressLabel
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                                lineNumber: 252,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                        lineNumber: 248,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-sm leading-relaxed",
                                                                        children: [
                                                                            entry.spentLabel,
                                                                            " gastos para um limite de",
                                                                            " ",
                                                                            entry.limitLabel,
                                                                            "."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                        lineNumber: 256,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, entry.category, true, {
                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                lineNumber: 240,
                                                                columnNumber: 25
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-600",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].alertsFallback
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].categoryBreakdownTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-3",
                                                        children: activeProfileSnapshot.categoryBreakdown.slice(0, 4).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between gap-3 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-slate-800",
                                                                                children: entry.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                                lineNumber: 280,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-500",
                                                                                children: [
                                                                                    entry.spentLabel,
                                                                                    " / ",
                                                                                    entry.limitLabel
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                                lineNumber: 283,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                        lineNumber: 279,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2 h-2 rounded-full bg-slate-100",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `h-2 rounded-full ${entry.status === "critical" ? "bg-rose-500" : entry.status === "warning" ? "bg-amber-500" : "bg-emerald-500"}`,
                                                                            style: {
                                                                                width: `${Math.min(entry.progress * 100, 100)}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                            lineNumber: 288,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                        lineNumber: 287,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, entry.category, true, {
                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                lineNumber: 278,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].latestExpensesTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-3",
                                                        children: activeProfileSnapshot.latestExpenses.length > 0 ? activeProfileSnapshot.latestExpenses.slice(0, 5).map((expense)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-semibold text-slate-800",
                                                                                children: expense.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                                lineNumber: 322,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500",
                                                                                children: [
                                                                                    expense.category,
                                                                                    " · ",
                                                                                    expense.dateLabel
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                                lineNumber: 325,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                        lineNumber: 321,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-semibold text-slate-700",
                                                                        children: expense.amountLabel
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                        lineNumber: 329,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, expense.id, true, {
                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                lineNumber: 317,
                                                                columnNumber: 27
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-600",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].latestExpensesEmpty
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                            lineNumber: 335,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 312,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].insightsTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 343,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-3",
                                                        children: activeProfileSnapshot.insights.map((insight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm leading-relaxed text-slate-600",
                                                                children: insight
                                                            }, insight, false, {
                                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                                lineNumber: 348,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 rounded-3xl border border-dashed border-black/10 bg-white/80 p-6 text-sm text-slate-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-2xl leading-relaxed",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].emptyStateDescription
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-10 pb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-slate-900 font-[var(--font-display)]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].quickStartTitle
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-4 md:grid-cols-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-3xl border border-black/10 bg-white/85 p-5 shadow-md shadow-black/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f6f68] text-white",
                                                        children: step.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$vision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dashboardCopy"].stepLabelPrefix,
                                                            " 0",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-4 text-lg font-semibold text-slate-900",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm text-slate-600",
                                                children: step.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.title, true, {
                                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/visao/painel/dashboard-client.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(DashboardClient, "sPaXUR5Ht7YjSYp0JJ46BJVa9Fg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = DashboardClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d6b1884d._.js.map