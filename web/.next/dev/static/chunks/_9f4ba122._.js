(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/messages/pt-PT/planeamento.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "planeamentoCopy",
    ()=>planeamentoCopy
]);
const planeamentoCopy = {
    orcamento: {
        eyebrow: "Planeamento",
        title: "Orçamento base",
        subtitle: "Defina limites mensais e objetivos por categoria.",
        badge: "Ativo",
        plannedBudgetLabel: "Orçamento planeado",
        monthlyIncomeLabel: "Rendimento mensal",
        spentLabel: "Gasto atual",
        remainingLabel: "Margem",
        limitFieldLabel: "Limite",
        items: [
            {
                name: "Renda",
                limit: "EUR 900",
                progress: 0.75
            },
            {
                name: "Alimentação",
                limit: "EUR 320",
                progress: 0.58
            },
            {
                name: "Transportes",
                limit: "EUR 120",
                progress: 0.4
            },
            {
                name: "Lazer",
                limit: "EUR 90",
                progress: 0.22
            }
        ],
        goalsLabel: "Objetivos",
        goals: [
            "Mantenha a alimentação abaixo de EUR 320.",
            "Reserve EUR 120 para emergências."
        ],
        quickAdjustmentsLabel: "Ajustes rápidos",
        quickAdjustments: [
            "Aumentar renda",
            "Rever lazer",
            "Reduzir transportes"
        ],
        emptyLabel: "Sem perfil ativo para calcular o orçamento."
    },
    cenarios: {
        eyebrow: "Planeamento",
        title: "Cenários",
        subtitle: "Simulações simples para antecipar o mês.",
        badge: "Simulação",
        impactLabel: "Impacto na margem",
        marginAfterLabel: "Margem resultante",
        baseStateLabel: "Estado atual",
        emptyLabel: "Sem perfil ativo para simular cenários.",
        items: [
            {
                title: "Mês apertado",
                description: "Reduzir a despesa em lazer e ajustar transportes.",
                impact: "-12%"
            },
            {
                title: "Rendimento extra",
                description: "Receita pontual para reforçar a poupança.",
                impact: "+8%"
            },
            {
                title: "Aumento da renda",
                description: "Aumentar o limite de habitação e recalcular objetivos.",
                impact: "-6%"
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(app)/planeamento/orcamento/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlaneamentoBudget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/finance-store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$planeamento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/planeamento.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../profile-required-state'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../window-shell'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PlaneamentoBudget() {
    _s();
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$planeamento$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["planeamentoCopy"].orcamento;
    const { activeProfileName, activeProfileSnapshot, updateBudgetLimit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"])();
    const quickAdjustments = activeProfileSnapshot.categoryBreakdown.slice(0, 3).map((entry)=>({
            label: entry.limit > 0 ? `${entry.category} + 25` : `Criar limite em ${entry.category}`,
            onClick: ()=>updateBudgetLimit(activeProfileName, entry.category, Math.max(entry.limit, entry.spent) + 25)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WindowShell, {
        eyebrow: copy.eyebrow,
        title: copy.title,
        subtitle: copy.subtitle,
        badge: copy.badge,
        children: !activeProfileName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileRequiredState, {}, void 0, false, {
            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
            lineNumber: 35,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: activeProfileSnapshot.categoryBreakdown.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-testid": `budget-card-${item.category}`,
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-slate-800",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right text-xs text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        copy.spentLabel,
                                                        ": ",
                                                        item.spentLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        copy.remainingLabel,
                                                        ": ",
                                                        item.remainingLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "mt-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: [
                                        copy.limitFieldLabel,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.01",
                                            value: item.limit,
                                            onChange: (event)=>updateBudgetLimit(activeProfileName, item.category, event.target.value),
                                            className: "mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 h-2 rounded-full bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-2 rounded-full ${item.status === "critical" ? "bg-rose-500" : item.status === "warning" ? "bg-amber-500" : "bg-emerald-500"}`,
                                        style: {
                                            width: `${Math.min(item.progress * 100, 100)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.category, true, {
                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                    lineNumber: 38,
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
                                    children: copy.goalsLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-2 text-sm text-slate-600",
                                    children: activeProfileSnapshot.insights.map((goal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: goal
                                        }, goal, false, {
                                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.quickAdjustmentsLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2",
                                    children: quickAdjustments.map((adjustment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: adjustment.onClick,
                                            className: "rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:-translate-y-0.5",
                                            children: adjustment.label
                                        }, adjustment.label, false, {
                                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-black/5 bg-white px-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
                                    children: copy.monthlyIncomeLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-2xl font-semibold text-slate-900",
                                    children: activeProfileSnapshot.monthlyIncomeLabel
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500",
                                    children: [
                                        copy.remainingLabel,
                                        " após ",
                                        activeProfileSnapshot.totalSpentLabel,
                                        " gastos."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
            lineNumber: 37,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(app)/planeamento/orcamento/page.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(PlaneamentoBudget, "KqHun5u/fKUKBg01wpsbNhBjusM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$finance$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppState"]
    ];
});
_c = PlaneamentoBudget;
var _c;
__turbopack_context__.k.register(_c, "PlaneamentoBudget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9f4ba122._.js.map