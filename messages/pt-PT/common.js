import { routes } from "@/config/routes.mjs";

export const metadata = {
  title: "baseZero - Clareza para gerir o dinheiro",
  description: "Uma experiência simples para gerir o fluxo de caixa com clareza.",
};

export const emptyProfileState = {
  title: "Escolha um perfil para continuar",
  description:
    "O perfil ativo define o contexto da navegação, das despesas e do orçamento. Selecione um perfil no painel para trabalhar com dados reais.",
  action: "Abrir painel",
};

export const navigation = {
  label: "Navegação",
  profilePrefix: "Perfil",
  clearLabel: "limpar",
  items: [
    { label: "Painel", href: routes.visao.painel },
    { label: "Lista", href: routes.despesas.lista },
    { label: "Adicionar", href: routes.despesas.adicionar },
    { label: "Editar", href: routes.despesas.editar },
    { label: "Orçamento", href: routes.planeamento.orcamento },
    { label: "Cenários", href: routes.planeamento.cenarios },
    { label: "Perfil", href: routes.definicoes.perfil },
    { label: "Plano", href: routes.definicoes.plano },
  ],
};

export const breadcrumbs = {
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
    plano: "Plano",
  },
};
