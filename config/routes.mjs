export const queryKeys = {
  profile: "perfil",
  legacyProfile: "profile",
};

export const routes = {
  home: "/visao/painel",
  visao: {
    root: "/visao",
    painel: "/visao/painel",
  },
  despesas: {
    root: "/despesas",
    lista: "/despesas/lista",
    adicionar: "/despesas/adicionar",
    editar: "/despesas/editar",
  },
  planeamento: {
    root: "/planeamento",
    orcamento: "/planeamento/orcamento",
    cenarios: "/planeamento/cenarios",
  },
  definicoes: {
    root: "/definicoes",
    perfil: "/definicoes/perfil",
    plano: "/definicoes/plano",
  },
};

export const legacyRedirects = [
  { source: "/vision", destination: routes.visao.painel, permanent: false },
  {
    source: "/vision/dashboard",
    destination: routes.visao.painel,
    permanent: false,
  },
  { source: "/settings", destination: routes.definicoes.perfil, permanent: false },
  {
    source: "/settings/profile",
    destination: routes.definicoes.perfil,
    permanent: false,
  },
  {
    source: "/settings/plan",
    destination: routes.definicoes.plano,
    permanent: false,
  },
  {
    source: "/planeamento/budget",
    destination: routes.planeamento.orcamento,
    permanent: false,
  },
  {
    source: "/planeamento/scenarios",
    destination: routes.planeamento.cenarios,
    permanent: false,
  },
  {
    source: "/despesas/add",
    destination: routes.despesas.adicionar,
    permanent: false,
  },
  {
    source: "/despesas/edit",
    destination: routes.despesas.editar,
    permanent: false,
  },
  {
    source: "/despesas/list",
    destination: routes.despesas.lista,
    permanent: false,
  },
];
