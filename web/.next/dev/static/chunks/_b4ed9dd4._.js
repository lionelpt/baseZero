(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/validation/schemas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppStateSchema",
    ()=>AppStateSchema,
    "BudgetLimitSchema",
    ()=>BudgetLimitSchema,
    "ExpenseSchema",
    ()=>ExpenseSchema,
    "ProfileDetailsSchema",
    ()=>ProfileDetailsSchema,
    "ProfileSchema",
    ()=>ProfileSchema,
    "validateAppState",
    ()=>validateAppState,
    "validateBudgetLimits",
    ()=>validateBudgetLimits,
    "validateExpense",
    ()=>validateExpense,
    "validateProfileDetails",
    ()=>validateProfileDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
/**
 * Mensagens de erro customizadas para português
 */ const errorMessages = {
    expenseName: "Nome da despesa entre 1 e 100 caracteres",
    expenseAmount: "Valor deve ser positivo",
    expenseCategory: "Categoria obrigatória",
    expenseDate: "Data inválida",
    expenseKind: "Tipo deve ser 'fixed' ou 'variable'",
    expenseNotes: "Notas não podem ultrapassar 500 caracteres",
    profileName: "Nome entre 1 e 50 caracteres",
    profileEmail: "Email inválido",
    profileCurrency: "Moeda obrigatória",
    profileIncome: "Rendimento mensal deve ser positivo",
    budgetLimit: "Limite orçamental deve ser positivo"
};
const ExpenseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, errorMessages.expenseName).max(100, errorMessages.expenseName).trim(),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive(errorMessages.expenseAmount).finite().multipleOf(0.01, "Máximo 2 casas decimais"),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, errorMessages.expenseCategory),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{4}-\d{2}-\d{2}$/, errorMessages.expenseDate),
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "fixed",
        "variable"
    ], {
        errorMap: ()=>({
                message: errorMessages.expenseKind
            })
    }),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500, errorMessages.expenseNotes).trim().optional().default(""),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const ProfileDetailsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, errorMessages.profileName).max(50, errorMessages.profileName).trim(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(errorMessages.profileEmail).trim().toLowerCase(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, errorMessages.profileCurrency),
    monthlyIncome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive(errorMessages.profileIncome).finite(),
    plan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const BudgetLimitSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    Habitação: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(errorMessages.budgetLimit),
    Alimentação: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(errorMessages.budgetLimit),
    Transportes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(errorMessages.budgetLimit),
    Lazer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(errorMessages.budgetLimit),
    Saúde: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(errorMessages.budgetLimit)
});
const ProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    details: ProfileDetailsSchema,
    preferences: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        emailSummary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true),
        alerts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true),
        weekStartsOn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }),
    budgetLimits: BudgetLimitSchema,
    expenses: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ExpenseSchema).optional().default([])
});
const AppStateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    selectedProfile: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    profiles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(ProfileSchema)
});
function validateExpense(data) {
    try {
        return {
            success: true,
            data: ExpenseSchema.parse(data)
        };
    } catch (error) {
        return {
            success: false,
            errors: error.flatten().fieldErrors,
            message: error.issues[0]?.message || "Validação falhou"
        };
    }
}
function validateProfileDetails(data) {
    try {
        return {
            success: true,
            data: ProfileDetailsSchema.parse(data)
        };
    } catch (error) {
        return {
            success: false,
            errors: error.flatten().fieldErrors,
            message: error.issues[0]?.message || "Validação falhou"
        };
    }
}
function validateBudgetLimits(data) {
    try {
        return {
            success: true,
            data: BudgetLimitSchema.parse(data)
        };
    } catch (error) {
        return {
            success: false,
            errors: error.flatten().fieldErrors,
            message: error.issues[0]?.message || "Validação falhou"
        };
    }
}
function validateAppState(data) {
    try {
        return {
            success: true,
            data: AppStateSchema.parse(data)
        };
    } catch (error) {
        return {
            success: false,
            errors: error.flatten().fieldErrors,
            message: error.issues[0]?.message || "Estado inválido"
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/messages/pt-PT/despesas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "despesasCopy",
    ()=>despesasCopy
]);
const despesasCopy = {
    add: {
        eyebrow: "Despesas",
        title: "Adicionar despesa",
        subtitle: "Registo rápido com valor, data e categoria.",
        badge: "Rápido",
        fields: {
            name: "Descrição",
            amount: "Valor",
            date: "Data",
            category: "Categoria",
            kind: "Tipo",
            notes: "Notas"
        },
        kindOptions: {
            fixed: "Fixa",
            variable: "Variável"
        },
        categoryOptions: [
            "Alimentação",
            "Transportes",
            "Renda",
            "Lazer"
        ],
        namePlaceholder: "Ex.: Supermercado",
        notesPlaceholder: "Ex.: ida rápida ao supermercado",
        shortcutsLabel: "Atalhos",
        shortcuts: [
            "Café",
            "Supermercado",
            "Uber",
            "Farmácia",
            "Combustível"
        ],
        actionsLabel: "Ações",
        actions: {
            save: "Guardar",
            saveAndAddAnother: "Guardar e adicionar outra"
        },
        successLabel: "Despesa guardada."
    },
    edit: {
        eyebrow: "Despesas",
        title: "Editar despesa",
        subtitle: "Ajuste valor, data, categoria e alertas.",
        badge: "Editar",
        fields: {
            name: "Descrição",
            amount: "Valor",
            date: "Data",
            category: "Categoria",
            kind: "Tipo",
            notes: "Notas"
        },
        kindOptions: {
            fixed: "Fixa",
            variable: "Variável"
        },
        defaults: {
            name: "Streaming",
            amount: "58.00",
            date: "2026-02-02",
            category: "Subscrições",
            notes: "Serviço de streaming"
        },
        categoryOptions: [
            "Subscrições",
            "Alimentação",
            "Transportes",
            "Outros"
        ],
        alertsLabel: "Alertas",
        alertsBody: "Esta despesa já representa 12% do limite mensal.",
        recentLabel: "Recentes",
        actionsLabel: "Ações",
        actions: {
            save: "Guardar",
            delete: "Eliminar"
        },
        emptyLabel: "Sem despesas para editar."
    },
    list: {
        eyebrow: "Despesas",
        title: "Lista de despesas",
        subtitle: "Vista mensal com filtros, categorias e alertas simples.",
        badge: "Mensal",
        filters: [
            "Todas",
            "Fixas",
            "Variáveis",
            "Alertas"
        ],
        kinds: {
            fixed: "Fixa",
            variable: "Variável"
        },
        items: [
            {
                name: "Renda",
                category: "Habitação",
                amount: "EUR 850",
                date: "01/02"
            },
            {
                name: "Supermercado",
                category: "Alimentação",
                amount: "EUR 126",
                date: "02/02"
            },
            {
                name: "Transportes",
                category: "Mobilidade",
                amount: "EUR 42",
                date: "03/02"
            },
            {
                name: "Streaming",
                category: "Lazer",
                amount: "EUR 12",
                date: "03/02"
            }
        ],
        totalCard: {
            label: "Total do mês",
            value: "EUR 1,030",
            helper: "Dentro do orçamento."
        },
        alertCard: {
            label: "Alerta",
            body: "A alimentação está a 78% do limite orçamental.",
            fallback: "Sem categorias em zona de alerta."
        },
        exportCard: {
            label: "Exportar",
            body: "Partilhe um resumo simples num clique.",
            action: "Copiar resumo",
            downloadAction: "Descarregar .txt",
            successLabel: "Resumo copiado para a area de transferencia.",
            fallbackLabel: "Resumo preparado para copia manual.",
            downloadSuccessLabel: "Resumo descarregado.",
            copiedLabel: "Resumo gerado"
        },
        editAction: "Editar",
        emptyLabel: "Não existem despesas para este filtro."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/profile-state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileRequiredState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProfileRequiredState() {
    _s();
    const { buildHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-dashed border-black/10 bg-white px-6 py-10 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold text-slate-900",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyProfileState"].title
            }, void 0, false, {
                fileName: "[project]/app/(app)/profile-state.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyProfileState"].description
            }, void 0, false, {
                fileName: "[project]/app/(app)/profile-state.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: buildHref(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].visao.painel),
                className: "mt-5 inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#0c5c57]",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyProfileState"].action
            }, void 0, false, {
                fileName: "[project]/app/(app)/profile-state.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/profile-state.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ProfileRequiredState, "FfjG0DagS0v72IeXsJm3V7Wkt+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = ProfileRequiredState;
var _c;
__turbopack_context__.k.register(_c, "ProfileRequiredState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/_components/window-shell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WindowShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function WindowShell({ eyebrow, title, subtitle, badge, actions, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-6 py-12 md:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-lg shadow-black/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-4 border-b border-black/10 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2.5 w-2.5 rounded-full bg-[#f3c4ad]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/_components/window-shell.js",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2.5 w-2.5 rounded-full bg-[#f6e2b9]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/_components/window-shell.js",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2.5 w-2.5 rounded-full bg-[#cfe1d3]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/_components/window-shell.js",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/_components/window-shell.js",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400",
                                            children: eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/_components/window-shell.js",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-semibold text-slate-900 font-[var(--font-display)]",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/_components/window-shell.js",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500",
                                            children: subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/_components/window-shell.js",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/_components/window-shell.js",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/_components/window-shell.js",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                    children: badge
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/_components/window-shell.js",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this) : null,
                                actions
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/_components/window-shell.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/_components/window-shell.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(app)/_components/window-shell.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/_components/window-shell.js",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/_components/window-shell.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = WindowShell;
var _c;
__turbopack_context__.k.register(_c, "WindowShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/movimentos/adicionar/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DespesasAdd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation/schemas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$despesas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/despesas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$profile$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/profile-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$window$2d$shell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/_components/window-shell.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const shortcutCategories = {
    "Café": "Alimentação",
    Supermercado: "Alimentação",
    Uber: "Transportes",
    Farmácia: "Saúde",
    Combustível: "Transportes"
};
function buildInitialForm(activeProfile) {
    const categories = activeProfile ? Object.keys(activeProfile.budgetLimits) : [
        "Alimentação"
    ];
    return {
        name: "",
        amount: "",
        date: new Date().toISOString().slice(0, 10),
        category: categories[0] || "Alimentação",
        kind: "variable",
        notes: ""
    };
}
function AddExpenseForm({ activeProfileName, activeProfile, addExpense, buildHref }) {
    _s();
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$despesas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["despesasCopy"].add;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AddExpenseForm.useState": ()=>buildInitialForm(activeProfile)
    }["AddExpenseForm.useState"]);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const categories = activeProfile ? Object.keys(activeProfile.budgetLimits) : copy.categoryOptions;
    const updateField = (field, value)=>{
        setForm((currentForm)=>({
                ...currentForm,
                [field]: value
            }));
    };
    const handleShortcut = (label)=>{
        const suggestedCategory = shortcutCategories[label];
        const nextCategory = categories.includes(suggestedCategory) ? suggestedCategory : categories[0];
        setForm((currentForm)=>({
                ...currentForm,
                name: label,
                category: nextCategory,
                kind: nextCategory && /habitação|renda|propinas|serviços/i.test(nextCategory) ? "fixed" : "variable"
            }));
    };
    const persistExpense = (resetAfterSave)=>{
        // Validação usando Zod
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2f$schemas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateExpense"])({
            name: form.name,
            amount: Number(form.amount),
            date: form.date,
            category: form.category,
            kind: form.kind,
            notes: form.notes
        });
        if (!validation.success) {
            setFeedback({
                tone: "error",
                message: validation.message
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
            notes: form.notes
        });
        if (!expenseId) {
            setFeedback({
                tone: "error",
                message: "Não foi possível guardar a despesa."
            });
            return;
        }
        if (resetAfterSave) {
            setForm(buildInitialForm(activeProfile));
            setFeedback({
                tone: "success",
                message: copy.successLabel
            });
            return;
        }
        router.push(buildHref(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.lista));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                        children: [
                            copy.fields.name,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.name,
                                onChange: (event)=>updateField("name", event.target.value),
                                placeholder: copy.namePlaceholder,
                                className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                        children: [
                            copy.fields.amount,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "0",
                                step: "0.01",
                                value: form.amount,
                                onChange: (event)=>updateField("amount", event.target.value),
                                placeholder: "0.00",
                                className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                        children: [
                            copy.fields.date,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                value: form.date,
                                onChange: (event)=>updateField("date", event.target.value),
                                className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                        children: [
                            copy.fields.category,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: form.category,
                                onChange: (event)=>updateField("category", event.target.value),
                                className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none",
                                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: category
                                    }, category, false, {
                                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                        children: [
                            copy.fields.kind,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: form.kind,
                                onChange: (event)=>updateField("kind", event.target.value),
                                className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "fixed",
                                        children: copy.kindOptions.fixed
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "variable",
                                        children: copy.kindOptions.variable
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                        children: [
                            copy.fields.notes,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: 4,
                                value: form.notes,
                                onChange: (event)=>updateField("notes", event.target.value),
                                placeholder: copy.notesPlaceholder,
                                className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                children: copy.shortcutsLabel
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: copy.shortcuts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleShortcut(item),
                                        className: "rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:-translate-y-0.5",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                children: copy.actionsLabel
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>persistExpense(false),
                                        className: "inline-flex items-center rounded-full bg-[#0f6f68] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5",
                                        children: copy.actions.save
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>persistExpense(true),
                                        className: "inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5",
                                        children: copy.actions.saveAndAddAnother
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            feedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-3 rounded-lg px-3 py-2 text-sm font-medium ${feedback.tone === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`,
                                children: feedback.message
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(AddExpenseForm, "OSxEKlej3mCqTYw4C9ySB2l2obc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddExpenseForm;
function DespesasAdd() {
    _s1();
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$despesas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["despesasCopy"].add;
    const { activeProfileName, activeProfile, addExpense, buildHref, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const formKey = `${activeProfileName}-${isHydrated ? "hydrated" : "loading"}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$window$2d$shell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        eyebrow: copy.eyebrow,
        title: copy.title,
        subtitle: copy.subtitle,
        badge: copy.badge,
        children: !activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$profile$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
            lineNumber: 252,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddExpenseForm, {
            activeProfileName: activeProfileName,
            activeProfile: activeProfile,
            addExpense: addExpense,
            buildHref: buildHref
        }, formKey, false, {
            fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
            lineNumber: 254,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/movimentos/adicionar/page.js",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s1(DespesasAdd, "0fHxzhg78ASquc8F6WsNE7fQrC0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c1 = DespesasAdd;
var _c, _c1;
__turbopack_context__.k.register(_c, "AddExpenseForm");
__turbopack_context__.k.register(_c1, "DespesasAdd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b4ed9dd4._.js.map