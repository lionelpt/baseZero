import { expect, test } from "@playwright/test";
import { openRoute, resetAppState } from "./helpers";

test.beforeEach(async ({ page }) => {
  await resetAppState(page);
});

test("perfil, despesas, orçamento e cenários mantêm o estado coerente", async ({
  page,
}) => {
  await openRoute(page, "/visao/painel");

  await page.getByRole("button", { name: /Estudante/i }).click();
  await expect(
    page.getByRole("button", { name: /Perfil:\s*Estudante/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "Adicionar despesa" }).click();
  await expect(page).toHaveURL(/\/despesas\/adicionar\?perfil=Estudante/);

  await page.getByLabel("Descrição").fill("Teste E2E Mercado");
  await page.getByLabel("Valor").fill("19.75");
  await page.getByLabel("Categoria").selectOption("Alimentação");
  await page.getByLabel("Notas").fill("Criado pela suite E2E.");
  await page.getByRole("button", { name: /^Guardar$/ }).click();

  await expect(page).toHaveURL(/\/despesas\/lista\?perfil=Estudante/);
  await expect(page.getByRole("link", { name: /Teste E2E Mercado/i })).toBeVisible();

  await page.getByRole("link", { name: /Teste E2E Mercado/i }).click();
  await expect(page).toHaveURL(/\/despesas\/editar\?/);

  await page.getByLabel("Valor").fill("29.75");
  await page.getByRole("button", { name: /^Guardar$/ }).click();
  await expect(page.getByText("Alterações guardadas.")).toBeVisible();

  await openRoute(page, "/planeamento/orcamento", "Estudante");
  await page.getByRole("button", { name: "Alimentação + 25" }).click();
  await expect(page.getByTestId("budget-card-Alimentação").getByRole("spinbutton")).toHaveValue("245");

  await openRoute(page, "/planeamento/cenarios", "Estudante");
  await expect(page.getByText("Rendimento extra")).toBeVisible();
  await expect(page.getByText(/Impacto na margem/i).first()).toBeVisible();

  await openRoute(page, "/definicoes/perfil", "Estudante");
  await page.getByLabel("Rendimento mensal").fill("1250");
  await page.getByRole("button", { name: "Guardar alterações" }).click();
  await expect(page.getByText("Alterações guardadas.")).toBeVisible();

  await page.reload();
  await expect(page.getByLabel("Rendimento mensal")).toHaveValue("1250");
});
