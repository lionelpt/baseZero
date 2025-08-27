export const planeamentoCopy = {
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
      { name: "Renda", limit: "EUR 900", progress: 0.75 },
      { name: "Alimentação", limit: "EUR 320", progress: 0.58 },
      { name: "Transportes", limit: "EUR 120", progress: 0.4 },
      { name: "Lazer", limit: "EUR 90", progress: 0.22 },
    ],
    goalsLabel: "Objetivos",
    goals: [
      "Mantenha a alimentação abaixo de EUR 320.",
      "Reserve EUR 120 para emergências.",
    ],
    quickAdjustmentsLabel: "Ajustes rápidos",
    quickAdjustments: [
      "Aumentar renda",
      "Rever lazer",
      "Reduzir transportes",
    ],
    emptyLabel: "Sem perfil ativo para calcular o orçamento.",
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
        impact: "-12%",
      },
      {
        title: "Rendimento extra",
        description: "Receita pontual para reforçar a poupança.",
        impact: "+8%",
      },
      {
        title: "Aumento da renda",
        description: "Aumentar o limite de habitação e recalcular objetivos.",
        impact: "-6%",
      },
    ],
  },
};
