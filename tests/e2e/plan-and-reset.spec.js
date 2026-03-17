import { expect, test } from "@playwright/test";
import { openRoute, resetAppState } from "./helpers";

test.beforeEach(async ({ page }) => {
  await resetAppState(page);
});

test("plano, exportação e reposição repõem o perfil ativo", async ({ page }) => {
  await openRoute(page, "/definicoes/plano", "Pessoal");
  const currentPlanCard = page.getByTestId("current-plan-card");
  const proPlanCard = page.getByTestId("plan-card-Pro");
  const essentialPlanCard = page.getByTestId("plan-card-Essencial");

  await proPlanCard.getByRole("button", { name: "Escolher plano" }).click();
  await expect(page.getByText("Plano ativo atualizado para Pro.")).toBeVisible();
  await expect(currentPlanCard).toContainText("Pro");

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Descarregar .txt" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("resumo-pessoal.txt");
  await expect(page.getByText("Resumo descarregado.")).toBeVisible();

  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Repor perfil ativo" }).click();
  await expect(page.getByText("Perfil reposto com sucesso.")).toBeVisible();
  await expect(currentPlanCard).toContainText("Plus");

  await essentialPlanCard.getByRole("button", { name: "Escolher plano" }).click();
  await expect(
    page.getByText("Plano ativo atualizado para Essencial.")
  ).toBeVisible();
  await expect(currentPlanCard).toContainText("Essencial");

  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Repor aplicacao" }).click();
  await expect(page.getByText("Aplicacao reposta com sucesso.")).toBeVisible();
  await expect(currentPlanCard).toContainText("Plus");

  await openRoute(page, "/definicoes/perfil", "Pessoal");
  await expect(page.getByLabel("Rendimento mensal")).toHaveValue("2400");
});
