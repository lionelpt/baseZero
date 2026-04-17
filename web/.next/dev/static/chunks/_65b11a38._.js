(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/profile-summary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildProfileSummary",
    ()=>buildProfileSummary,
    "buildSummaryFilename",
    ()=>buildSummaryFilename
]);
function buildProfileSummary({ profileName, profile, snapshot }) {
    if (!profileName || !profile || !snapshot) {
        return "";
    }
    const lines = [
        `Resumo do perfil ${profileName}`,
        `Plano: ${profile.details.plan}`,
        `Periodo: ${snapshot.monthLabel}`,
        `Rendimento mensal: ${snapshot.monthlyIncomeLabel}`,
        `Gasto do mes: ${snapshot.totalSpentLabel}`,
        `Orcamento planeado: ${snapshot.totalBudgetLabel}`,
        `Margem atual: ${snapshot.remainingIncomeLabel}`
    ];
    if (snapshot.topCategory) {
        lines.push(`Categoria com maior pressao: ${snapshot.topCategory.category} (${snapshot.topCategory.spentLabel})`);
    }
    if (snapshot.primaryAlert) {
        lines.push(`Alerta principal: ${snapshot.primaryAlert.category} em ${snapshot.primaryAlert.progressLabel} do limite`);
    }
    if (snapshot.latestExpenses.length > 0) {
        lines.push("");
        lines.push("Movimentos recentes:");
        snapshot.latestExpenses.slice(0, 5).forEach((expense)=>{
            lines.push(`- ${expense.name} | ${expense.category} | ${expense.dateLabel} | ${expense.amountLabel}`);
        });
    }
    return lines.join("\n");
}
function buildSummaryFilename(profileName) {
    const slug = (profileName || "perfil").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return `resumo-${slug || "perfil"}.txt`;
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
"[project]/app/(app)/movimentos/lista/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DespesasList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$summary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/profile-summary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$despesas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/despesas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$profile$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/profile-state.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$window$2d$shell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(app)/_components/window-shell.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function DespesasList() {
    _s();
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$despesas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["despesasCopy"].list;
    const { activeProfileName, activeProfile, activeProfileSnapshot, buildHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(copy.filters[0]);
    const [summaryState, setSummaryState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredExpenses = activeProfileSnapshot.latestExpenses.filter((expense)=>{
        if (activeFilter === copy.filters[1]) {
            return expense.kind === "fixed";
        }
        if (activeFilter === copy.filters[2]) {
            return expense.kind === "variable";
        }
        if (activeFilter === copy.filters[3]) {
            return activeProfileSnapshot.alertCategoryNames.includes(expense.category);
        }
        return true;
    });
    const summaryText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$summary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProfileSummary"])({
        profileName: activeProfileName,
        profile: activeProfile,
        snapshot: activeProfileSnapshot
    });
    const triggerDownload = ()=>{
        const blob = new Blob([
            summaryText
        ], {
            type: "text/plain;charset=utf-8"
        });
        const href = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = href;
        link.download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$summary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSummaryFilename"])(activeProfileName);
        link.click();
        URL.revokeObjectURL(href);
    };
    const generateSummary = async ()=>{
        if (!summaryText) {
            return;
        }
        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(summaryText);
                setSummaryState({
                    tone: "success",
                    message: copy.exportCard.successLabel,
                    preview: summaryText
                });
                return;
            } catch  {}
        }
        setSummaryState({
            tone: "neutral",
            message: copy.exportCard.fallbackLabel,
            preview: summaryText
        });
    };
    const downloadSummary = ()=>{
        if (!summaryText) {
            return;
        }
        triggerDownload();
        setSummaryState({
            tone: "success",
            message: copy.exportCard.downloadSuccessLabel,
            preview: summaryText
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$window$2d$shell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        eyebrow: copy.eyebrow,
        title: copy.title,
        subtitle: copy.subtitle,
        badge: copy.badge,
        children: !activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$profile$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/(app)/movimentos/lista/page.js",
            lineNumber: 100,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: copy.filters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveFilter(filter),
                                    className: `rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 ${activeFilter === filter ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-800" : "border-black/10 bg-white text-slate-500"}`,
                                    children: filter
                                }, filter, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-3",
                            children: filteredExpenses.length > 0 ? filteredExpenses.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: buildHref(`${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].despesas.editar}?id=${item.id}`),
                                    className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-800",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: [
                                                        item.category,
                                                        " · ",
                                                        item.dateLabel,
                                                        " ·",
                                                        " ",
                                                        copy.kinds[item.kind]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-sm font-semibold text-slate-700",
                                                    children: item.amountLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1 inline-flex rounded-full border border-black/10 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500",
                                                    children: copy.editAction
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-dashed border-black/10 bg-white px-4 py-6 text-sm text-slate-600",
                                children: copy.emptyLabel
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.totalCard.label
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-2xl font-semibold text-slate-900",
                                    children: activeProfileSnapshot.totalSpentLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: activeProfileSnapshot.remainingIncome >= 0 ? `Margem atual ${activeProfileSnapshot.remainingIncomeLabel}.` : `Acima do rendimento em ${activeProfileSnapshot.overIncomeLabel}.`
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.alertCard.label
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-600",
                                    children: activeProfileSnapshot.primaryAlert ? `${activeProfileSnapshot.primaryAlert.category} está em ${activeProfileSnapshot.primaryAlert.progressLabel} do limite (${activeProfileSnapshot.primaryAlert.spentLabel} de ${activeProfileSnapshot.primaryAlert.limitLabel}).` : copy.alertCard.fallback
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 h-2 rounded-full bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 rounded-full bg-emerald-500",
                                        style: {
                                            width: `${Math.min((activeProfileSnapshot.primaryAlert?.progress || 0) * 100, 100)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.exportCard.label
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-600",
                                    children: copy.exportCard.body
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: generateSummary,
                                    className: "mt-3 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5",
                                    children: copy.exportCard.action
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: downloadSummary,
                                    className: "mt-3 ml-2 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5",
                                    children: copy.exportCard.downloadAction
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                summaryState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-3 text-sm leading-relaxed ${summaryState.tone === "success" ? "text-emerald-700" : "text-slate-600"}`,
                                            children: summaryState.message
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-3 overflow-auto rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600 whitespace-pre-wrap",
                                            children: summaryState.preview
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/movimentos/lista/page.js",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/movimentos/lista/page.js",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/movimentos/lista/page.js",
            lineNumber: 102,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/movimentos/lista/page.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(DespesasList, "gJtj4t1Ma2v9E4AT2PohieP8ico=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = DespesasList;
var _c;
__turbopack_context__.k.register(_c, "DespesasList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_65b11a38._.js.map