import { routes } from "@/config/routes.mjs";

export const dashboardCopy = {
  badge: "Painel inicial",
  title: "finanças em decisões, dinheiro com clareza",
  description:
    "Esta página foca-se no essencial: escolher um perfil, aceder às ações principais e começar a registar sem ruído.",
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
    topCategory: "Categoria mais pressionada",
  },
  emptyStateTitle: "Escolha um perfil para ver métricas reais.",
  emptyStateDescription:
    "Assim que um perfil estiver ativo, o painel passa a refletir despesas, orçamento e cenários persistidos.",
  insightsTitle: "Sinais do mês",
  insightsDescription: "Alertas e movimentos recentes do perfil ativo.",
  alertsTitle: "Alertas orçamentais",
  alertsFallback: "Sem alertas críticos neste momento.",
  categoryBreakdownTitle: "Pressão por categoria",
  latestExpensesTitle: "Movimentos recentes",
  latestExpensesEmpty: "Sem despesas registadas.",
  noTopCategory: "Sem dados",
  profileSectionTitle: "Escolher um perfil",
  profileSectionDescription:
    "Escolha um perfil para manter o contexto de navegação consistente.",
  quickStartTitle: "Início rápido",
  stepLabelPrefix: "Passo",
  coreActions: [
    {
      title: "Adicionar despesa",
      description: "Registe uma nova transação com valor, data e categoria.",
      href: routes.despesas.adicionar,
      cta: "Abrir formulário",
    },
    {
      title: "Ver despesas",
      description: "Reveja os registos mensais e detete alterações rapidamente.",
      href: routes.despesas.lista,
      cta: "Abrir lista",
    },
    {
      title: "Definir orçamento",
      description: "Ajuste limites e mantenha o plano de despesas realista.",
      href: routes.planeamento.orcamento,
      cta: "Abrir orçamento",
    },
  ],
};

export const budgetOptions = [
  {
    title: "Pessoal",
    description:
      "Planeie as despesas do dia a dia, defina objetivos e veja o saldo rapidamente.",
    tag: "Dia a dia",
    sticker: "#ffd6a5",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8.5" r="3.2" />
        <path d="M5 19.5c1.6-3 4-4.5 7-4.5s5.4 1.5 7 4.5" />
      </svg>
    ),
  },
  {
    title: "Estudante",
    description:
      "Acompanhe propinas, renda e pequenas despesas com lembretes inteligentes.",
    tag: "Campus",
    sticker: "#b8f2e6",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9.5l9-4 9 4-9 4-9-4z" />
        <path d="M7 13.5v3.5c0 1.2 2.5 2.5 5 2.5s5-1.3 5-2.5v-3.5" />
        <path d="M21 9.5v5.5" />
      </svg>
    ),
  },
  {
    title: "Família",
    description:
      "Coordene contas partilhadas, objetivos e mesadas num único lugar.",
    tag: "Partilhado",
    sticker: "#bcd4ff",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3.5 19.5c1-2.5 3-4 5-4" />
        <path d="M20.5 19.5c-1-2.5-3-4-5-4" />
        <path d="M7.5 19.5c1.1-3 3-4.5 4.5-4.5s3.4 1.5 4.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Casa",
    description: "Gira despesas recorrentes e divida custos com clareza.",
    tag: "Lar",
    sticker: "#ffc8dd",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10.5l8-6 8 6" />
        <path d="M6.5 9.5v9h11v-9" />
        <path d="M10 18.5v-4h4v4" />
      </svg>
    ),
  },
];

export const defaultCategories = [
  {
    title: "Casa",
    items: [
      "Hipoteca/Renda",
      "Reparações da casa",
      "Seguro da casa",
      "Produtos para a casa",
      "Supermercado",
    ],
  },
  {
    title: "Lazer",
    items: [
      "Entretenimento",
      "Férias",
      "Refeições fora",
      "Subscrições",
      "Outros gastos de lazer",
    ],
  },
  {
    title: "Serviços",
    items: ["Eletricidade", "Água", "Gás", "Telemóvel", "TV", "Internet"],
  },
  {
    title: "Educação",
    items: [
      "Propinas",
      "Livros",
      "Cursos/Conferências",
      "Refeições",
      "Poupança para estudos",
      "Crédito estudantil",
    ],
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
      "Outros",
    ],
  },
  {
    title: "Pessoal",
    items: [
      "Roupa",
      "Beleza/Bem-estar",
      "Fitness/Desporto",
      "Saúde",
      "Outros",
    ],
  },
  {
    title: "Finanças",
    items: [
      "Cartão de crédito",
      "Prestações de empréstimos",
      "Comissões bancárias",
      "Impostos",
      "Investimentos",
      "Contribuições para reforma",
    ],
  },
  {
    title: "Despesas do negócio",
    items: [
      "Espaço de escritório",
      "Serviços",
      "Salários",
      "Benefícios dos colaboradores",
      "Marketing",
      "Viagens",
    ],
  },
];

export const categoryTones = [
  "#fff1d6",
  "#e7f9f2",
  "#e8f1ff",
  "#ffe9f2",
  "#f4ffe2",
  "#e7f7ff",
  "#fff0dd",
  "#e9f1ff",
];

export const steps = [
  {
    title: "Escolher um perfil",
    description: "Escolha o perfil que melhor combina com o seu dia a dia.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6.5h16" />
        <path d="M4 12h16" />
        <path d="M4 17.5h10" />
      </svg>
    ),
  },
  {
    title: "Registar valor e data",
    description:
      "Adicione o custo e o dia em que aconteceu. Fica feito em segundos.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M7 3.5v3" />
        <path d="M17 3.5v3" />
        <path d="M7.5 12h4" />
        <path d="M7.5 15.5h8" />
      </svg>
    ),
  },
  {
    title: "Rever tendências",
    description:
      "Identifique padrões, reduza surpresas e planeie com antecedência.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18.5h16" />
        <path d="M7 18.5v-7" />
        <path d="M12 18.5v-10" />
        <path d="M17 18.5v-5" />
      </svg>
    ),
  },
];

export const useCaseWindowCopy = {
  active: "Ativo",
  activate: "Ativar",
  stepsSuffix: "etapas",
};

export const useCaseWindows = [
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
        href: routes.definicoes.perfil,
      },
      {
        title: "Configuração inicial",
        meta: "Renda, alimentação e transportes.",
        tag: "Configuração",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Registar despesas",
        meta: "Manual e rápido.",
        tag: "Despesa",
        href: routes.despesas.adicionar,
      },
      {
        title: "Ver resumo mensal",
        meta: "Saldo, categorias e alertas simples.",
        tag: "Resumo",
        href: routes.visao.painel,
      },
      {
        title: "Definir 1-2 objetivos",
        meta: "Ex.: manter a alimentação abaixo de X.",
        tag: "Objetivo",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Exportar / partilhar",
        meta: "Resumo simples e limitado.",
        tag: "Partilhar",
        href: routes.definicoes.plano,
      },
    ],
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
        href: routes.definicoes.perfil,
      },
      {
        title: "Configuração inicial",
        meta: "Propinas, renda e alimentação.",
        tag: "Configuração",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Registar despesas",
        meta: "Lanches, transportes e lazer.",
        tag: "Despesa",
        href: routes.despesas.adicionar,
      },
      {
        title: "Ver resumo mensal",
        meta: "Saldo e alertas de fim de mês.",
        tag: "Resumo",
        href: routes.visao.painel,
      },
      {
        title: "Definir 1-2 objetivos",
        meta: "Ex.: limite mensal para alimentação.",
        tag: "Objetivo",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Exportar / partilhar",
        meta: "Resumo para pais ou bolsas.",
        tag: "Partilhar",
        href: routes.definicoes.plano,
      },
    ],
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
        href: routes.definicoes.perfil,
      },
      {
        title: "Configuração inicial",
        meta: "Contas partilhadas, escola e saúde.",
        tag: "Configuração",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Registar despesas",
        meta: "Compras, atividades e extras.",
        tag: "Despesa",
        href: routes.despesas.adicionar,
      },
      {
        title: "Ver resumo mensal",
        meta: "Categorias e alertas simples.",
        tag: "Resumo",
        href: routes.visao.painel,
      },
      {
        title: "Definir 1-2 objetivos",
        meta: "Ex.: limite de despesa em supermercado.",
        tag: "Objetivo",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Exportar / partilhar",
        meta: "Resumo simples para todos.",
        tag: "Partilhar",
        href: routes.definicoes.plano,
      },
    ],
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
        href: routes.definicoes.perfil,
      },
      {
        title: "Configuração inicial",
        meta: "Renda, serviços e internet.",
        tag: "Configuração",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Registar despesas",
        meta: "Contas e compras para a casa.",
        tag: "Despesa",
        href: routes.despesas.adicionar,
      },
      {
        title: "Ver resumo mensal",
        meta: "Saldo e custos partilhados.",
        tag: "Resumo",
        href: routes.visao.painel,
      },
      {
        title: "Definir 1-2 objetivos",
        meta: "Ex.: reduzir a despesa energética.",
        tag: "Objetivo",
        href: routes.planeamento.orcamento,
      },
      {
        title: "Exportar / partilhar",
        meta: "Resumo simples para partilhar.",
        tag: "Partilhar",
        href: routes.definicoes.plano,
      },
    ],
  },
];
