export function buildProfileSummary({ profileName, profile, snapshot }) {
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
    `Margem atual: ${snapshot.remainingIncomeLabel}`,
  ];

  if (snapshot.topCategory) {
    lines.push(
      `Categoria com maior pressao: ${snapshot.topCategory.category} (${snapshot.topCategory.spentLabel})`
    );
  }

  if (snapshot.primaryAlert) {
    lines.push(
      `Alerta principal: ${snapshot.primaryAlert.category} em ${snapshot.primaryAlert.progressLabel} do limite`
    );
  }

  if (snapshot.latestExpenses.length > 0) {
    lines.push("");
    lines.push("Movimentos recentes:");
    snapshot.latestExpenses.slice(0, 5).forEach((expense) => {
      lines.push(
        `- ${expense.name} | ${expense.category} | ${expense.dateLabel} | ${expense.amountLabel}`
      );
    });
  }

  return lines.join("\n");
}

export function buildSummaryFilename(profileName) {
  const slug = (profileName || "perfil")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `resumo-${slug || "perfil"}.txt`;
}
