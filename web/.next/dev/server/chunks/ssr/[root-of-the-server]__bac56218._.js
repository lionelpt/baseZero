module.exports = [
"[next]/internal/font/google/fraunces_6a0eb4c4.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "fraunces_6a0eb4c4-module__QFUbya__className",
  "variable": "fraunces_6a0eb4c4-module__QFUbya__variable",
});
}),
"[next]/internal/font/google/fraunces_6a0eb4c4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fraunces_6a0eb4c4$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/fraunces_6a0eb4c4.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fraunces_6a0eb4c4$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Fraunces', 'Fraunces Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fraunces_6a0eb4c4$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fraunces_6a0eb4c4$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/manrope_3f0664e0.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "manrope_3f0664e0-module__Mu2JvG__className",
  "variable": "manrope_3f0664e0-module__Mu2JvG__variable",
});
}),
"[next]/internal/font/google/manrope_3f0664e0.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_3f0664e0$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/manrope_3f0664e0.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_3f0664e0$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Manrope', 'Manrope Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_3f0664e0$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_3f0664e0$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/config/routes.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/messages/pt-PT/common.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/routes.mjs [app-rsc] (ecmascript)");
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
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].visao.painel
        },
        {
            label: "Lista",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].despesas.lista
        },
        {
            label: "Adicionar",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].despesas.adicionar
        },
        {
            label: "Editar",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].despesas.editar
        },
        {
            label: "Orçamento",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].planeamento.orcamento
        },
        {
            label: "Cenários",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].planeamento.cenarios
        },
        {
            label: "Perfil",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].definicoes.perfil
        },
        {
            label: "Plano",
            href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$routes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].definicoes.plano
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
"[project]/app/layout.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fraunces_6a0eb4c4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/fraunces_6a0eb4c4.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_3f0664e0$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/manrope_3f0664e0.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-rsc] (ecmascript)");
;
;
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt-PT",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fraunces_6a0eb4c4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$manrope_3f0664e0$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/layout.js",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "metadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["metadata"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$pt$2d$PT$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/messages/pt-PT/common.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bac56218._.js.map