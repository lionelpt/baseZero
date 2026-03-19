export const definicoesCopy = {
  perfil: {
    eyebrow: "Definições",
    title: "Perfil",
    subtitle: "Dados da conta, idioma e moeda base.",
    badge: "Conta",
    fields: {
      name: "Nome",
      email: "Email",
      currency: "Moeda base",
      monthlyIncome: "Rendimento mensal",
    },
    defaults: {
      name: "Ana Martins",
      email: "ana@email.com",
      currencyOptions: ["EUR", "USD", "GBP"],
    },
    preferencesLabel: "Preferências",
    preferences: [
      "Resumo mensal por email.",
      "Alertas simples de limite de despesa.",
      "A semana começa à segunda-feira.",
    ],
    actionsLabel: "Ações",
    saveLabel: "Guardar alterações",
  },
  plano: {
    eyebrow: "Definições",
    title: "Plano",
    subtitle: "Gestão do plano, limites e exportações.",
    badge: "Plano",
    actionLabel: "Escolher plano",
    currentPlanLabel: "Plano atual",
    currentPlanDescription:
      "O plano define o nível de simulação, exportação e suporte ao perfil ativo.",
    selectedLabel: "Ativo",
    includeLabel: "Inclui",
    metricsLabel: "Utilização atual",
    exportLabel: "Exportação de perfil",
    exportDescription:
      "Gere um resumo real do perfil ativo para partilha ou arquivo.",
    exportAction: "Copiar resumo",
    exportDownloadAction: "Descarregar .txt",
    exportSuccessLabel: "Resumo copiado para a área de transferência.",
    exportFallbackLabel: "Resumo preparado para cópia manual.",
    exportDownloadSuccessLabel: "Resumo descarregado.",
    resetLabel: "Reposição de dados",
    resetDescription:
      "Reponha o perfil atual para os valores iniciais ou limpe todos os dados guardados localmente.",
    resetProfileAction: "Repor perfil ativo",
    resetAllAction: "Repor aplicação",
    resetProfileConfirm:
      "Quer repor o perfil ativo para os valores iniciais? As alterações locais deste perfil serão perdidas.",
    resetAllConfirm:
      "Quer repor todos os dados guardados localmente? Esta ação remove alterações em todos os perfis.",
    resetProfileSuccessLabel: "Perfil reposto com sucesso.",
    resetAllSuccessLabel: "Aplicação reposta com sucesso.",
    planChangeSuccessPrefix: "Plano ativo atualizado para",
    emptyLabel: "Sem perfil ativo para gerir o plano.",
    plans: [
      {
        title: "Essencial",
        description: "Resumo mensal e exportação básica.",
        price: "EUR 0",
        features: ["Resumo mensal", "Exportação básica", "Perfil único"],
      },
      {
        title: "Plus",
        description: "Objetivos, alertas e partilha rápida.",
        price: "EUR 6",
        features: ["Alertas", "Objetivos", "Partilha rápida"],
      },
      {
        title: "Pro",
        description: "Cenários, suporte a vários perfis e exportação avançada.",
        price: "EUR 12",
        features: ["Cenários", "Perfis múltiplos", "Exportação avançada"],
      },
    ],
  },
};
