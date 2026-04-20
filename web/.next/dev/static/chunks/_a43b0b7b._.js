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
"[project]/messages/pt-PT/definicoes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "definicoesCopy",
    ()=>definicoesCopy
]);
const definicoesCopy = {
    perfil: {
        eyebrow: "Definições",
        title: "Perfil",
        subtitle: "Dados da conta, idioma e moeda base.",
        badge: "Conta",
        fields: {
            name: "Nome",
            email: "Email",
            currency: "Moeda base",
            monthlyIncome: "Rendimento mensal"
        },
        defaults: {
            name: "Ana Martins",
            email: "ana@email.com",
            currencyOptions: [
                "EUR",
                "USD",
                "GBP"
            ]
        },
        preferencesLabel: "Preferências",
        preferences: [
            "Resumo mensal por email.",
            "Alertas simples de limite de despesa.",
            "A semana começa à segunda-feira."
        ],
        actionsLabel: "Ações",
        saveLabel: "Guardar alterações"
    },
    plano: {
        eyebrow: "Definições",
        title: "Plano",
        subtitle: "Gestão do plano, limites e exportações.",
        badge: "Plano",
        actionLabel: "Escolher plano",
        currentPlanLabel: "Plano atual",
        currentPlanDescription: "O plano define o nível de simulação, exportação e suporte ao perfil ativo.",
        selectedLabel: "Ativo",
        includeLabel: "Inclui",
        metricsLabel: "Utilização atual",
        exportLabel: "Exportação de perfil",
        exportDescription: "Gere um resumo real do perfil ativo para partilha ou arquivo.",
        exportAction: "Copiar resumo",
        exportDownloadAction: "Descarregar .txt",
        exportSuccessLabel: "Resumo copiado para a área de transferência.",
        exportFallbackLabel: "Resumo preparado para cópia manual.",
        exportDownloadSuccessLabel: "Resumo descarregado.",
        resetLabel: "Reposição de dados",
        resetDescription: "Reponha o perfil atual para os valores iniciais ou limpe todos os dados guardados localmente.",
        resetProfileAction: "Repor perfil ativo",
        resetAllAction: "Repor aplicação",
        resetProfileConfirm: "Quer repor o perfil ativo para os valores iniciais? As alterações locais deste perfil serão perdidas.",
        resetAllConfirm: "Quer repor todos os dados guardados localmente? Esta ação remove alterações em todos os perfis.",
        resetProfileSuccessLabel: "Perfil reposto com sucesso.",
        resetAllSuccessLabel: "Aplicação reposta com sucesso.",
        planChangeSuccessPrefix: "Plano ativo atualizado para",
        emptyLabel: "Sem perfil ativo para gerir o plano.",
        plans: [
            {
                title: "Essencial",
                description: "Resumo mensal e exportação básica.",
                price: "EUR 0",
                features: [
                    "Resumo mensal",
                    "Exportação básica",
                    "Perfil único"
                ]
            },
            {
                title: "Plus",
                description: "Objetivos, alertas e partilha rápida.",
                price: "EUR 6",
                features: [
                    "Alertas",
                    "Objetivos",
                    "Partilha rápida"
                ]
            },
            {
                title: "Pro",
                description: "Cenários, suporte a vários perfis e exportação avançada.",
                price: "EUR 12",
                features: [
                    "Cenários",
                    "Perfis múltiplos",
                    "Exportação avançada"
                ]
            }
        ]
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
"[project]/app/(app)/definicoes/plano/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$summary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/profile-summary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$definicoes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/definicoes.js [app-client] (ecmascript)");
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
function triggerSummaryDownload(profileName, summaryText) {
    const blob = new Blob([
        summaryText
    ], {
        type: "text/plain;charset=utf-8"
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$summary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSummaryFilename"])(profileName);
    link.click();
    URL.revokeObjectURL(href);
}
function SettingsPlan() {
    _s();
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$definicoes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["definicoesCopy"].plano;
    const { activeProfileName, activeProfile, activeProfileSnapshot, updateProfilePlan, resetProfile, resetAllData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (!activeProfileName) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$window$2d$shell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            eyebrow: copy.eyebrow,
            title: copy.title,
            subtitle: copy.subtitle,
            badge: copy.badge,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$profile$2d$state$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(app)/definicoes/plano/page.js",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(app)/definicoes/plano/page.js",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
    const activePlan = activeProfile.details.plan;
    const summaryText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$profile$2d$summary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildProfileSummary"])({
        profileName: activeProfileName,
        profile: activeProfile,
        snapshot: activeProfileSnapshot
    });
    const setMessage = (tone, message)=>{
        setFeedback({
            tone,
            message
        });
    };
    const selectPlan = (planTitle)=>{
        updateProfilePlan(activeProfileName, planTitle);
        setMessage("success", `${copy.planChangeSuccessPrefix} ${planTitle}.`);
    };
    const copySummary = async ()=>{
        if (!summaryText) {
            return;
        }
        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(summaryText);
                setMessage("success", copy.exportSuccessLabel);
                return;
            } catch  {}
        }
        setMessage("neutral", copy.exportFallbackLabel);
    };
    const downloadSummary = ()=>{
        if (!summaryText) {
            return;
        }
        triggerSummaryDownload(activeProfileName, summaryText);
        setMessage("success", copy.exportDownloadSuccessLabel);
    };
    const handleResetProfile = ()=>{
        if (!window.confirm(copy.resetProfileConfirm)) {
            return;
        }
        resetProfile(activeProfileName);
        setMessage("success", copy.resetProfileSuccessLabel);
    };
    const handleResetAll = ()=>{
        if (!window.confirm(copy.resetAllConfirm)) {
            return;
        }
        resetAllData();
        setMessage("success", copy.resetAllSuccessLabel);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$app$292f$_components$2f$window$2d$shell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        eyebrow: copy.eyebrow,
        title: copy.title,
        subtitle: copy.subtitle,
        badge: copy.badge,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-testid": "current-plan-card",
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.currentPlanLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-2xl font-semibold text-slate-900",
                                    children: activePlan
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm leading-relaxed text-slate-600",
                                    children: copy.currentPlanDescription
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-3",
                            children: copy.plans.map((plan)=>{
                                const isActive = plan.title === activePlan;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-testid": `plan-card-${plan.title}`,
                                    className: `rounded-2xl border bg-white px-4 py-4 ${isActive ? "border-emerald-200/80 ring-2 ring-emerald-200/70" : "border-black/5"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                                    children: plan.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-emerald-200/70 bg-emerald-100/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700",
                                                    children: copy.selectedLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-600",
                                            children: plan.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-lg font-semibold text-slate-900",
                                            children: plan.price
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400",
                                            children: copy.includeLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-2 text-sm text-slate-600",
                                            children: plan.features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: feature
                                                }, feature, false, {
                                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                                    lineNumber: 168,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>selectPlan(plan.title),
                                            disabled: isActive,
                                            className: `mt-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition ${isActive ? "cursor-default border border-emerald-200/70 bg-emerald-100/70 text-emerald-700" : "border border-black/10 bg-white text-slate-600 hover:-translate-y-0.5"}`,
                                            children: isActive ? copy.selectedLabel : copy.actionLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, plan.title, true, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                    lineNumber: 119,
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
                                    children: copy.metricsLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-3 text-sm text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Rendimento mensal: ",
                                                activeProfileSnapshot.monthlyIncomeLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Gasto atual: ",
                                                activeProfileSnapshot.totalSpentLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Orçamento planeado: ",
                                                activeProfileSnapshot.totalBudgetLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Margem atual: ",
                                                activeProfileSnapshot.remainingIncomeLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.exportLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm leading-relaxed text-slate-600",
                                    children: copy.exportDescription
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: copySummary,
                                            className: "inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5",
                                            children: copy.exportAction
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: downloadSummary,
                                            className: "inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5",
                                            children: copy.exportDownloadAction
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-4 overflow-auto rounded-2xl border border-black/5 bg-slate-50 px-4 py-3 text-xs leading-relaxed text-slate-600 whitespace-pre-wrap",
                                    children: summaryText
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.resetLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm leading-relaxed text-slate-600",
                                    children: copy.resetDescription
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleResetProfile,
                                            className: "inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5",
                                            children: copy.resetProfileAction
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleResetAll,
                                            className: "inline-flex items-center rounded-full border border-rose-200/70 bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-700 transition hover:-translate-y-0.5",
                                            children: copy.resetAllAction
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        feedback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-2xl border px-4 py-3 text-sm ${feedback.tone === "success" ? "border-emerald-200/70 bg-emerald-50 text-emerald-700" : "border-black/10 bg-slate-50 text-slate-600"}`,
                            children: feedback.message
                        }, void 0, false, {
                            fileName: "[project]/app/(app)/definicoes/plano/page.js",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/definicoes/plano/page.js",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/definicoes/plano/page.js",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/definicoes/plano/page.js",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(SettingsPlan, "XIyGtIwiOB9CDchZsIeMuuNjA+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = SettingsPlan;
var _c;
__turbopack_context__.k.register(_c, "SettingsPlan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a43b0b7b._.js.map