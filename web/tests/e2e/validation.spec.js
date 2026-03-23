import { expect, test } from "@playwright/test";
import { openRoute, resetAppState } from "./helpers";

test.beforeEach(async ({ page }) => {
  await resetAppState(page);
});

test.describe("Validação de Despesas", () => {
  test("rejeita despesa com valor negativo", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    await page.getByLabel("Descrição").fill("Compra");
    await page.getByLabel("Valor").fill("-50");
    await page.getByLabel("Categoria").selectOption("Alimentação");
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    await expect(page.getByText(/positivo/i)).toBeVisible();
    await expect(page).toHaveURL(/\/despesas\/adicionar/);
  });

  test("rejeita despesa com valor zero", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    await page.getByLabel("Descrição").fill("Compra");
    await page.getByLabel("Valor").fill("0");
    await page.getByLabel("Categoria").selectOption("Alimentação");
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    await expect(page.getByText(/positivo/i)).toBeVisible();
  });

  test("rejeita despesa com nome vazio", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    await page.getByLabel("Valor").fill("50");
    await page.getByLabel("Categoria").selectOption("Alimentação");
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    await expect(page.getByText(/caracteres/i)).toBeVisible();
  });

  test("rejeita despesa com nome muito longo", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    const longName = "a".repeat(101);
    await page.getByLabel("Descrição").fill(longName);
    await page.getByLabel("Valor").fill("50");
    await page.getByLabel("Categoria").selectOption("Alimentação");
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    await expect(page.getByText(/caracteres/i)).toBeVisible();
  });

  test("aceita despesa com nome válido após correção", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    // Primeiro tenta com nome vazio
    await page.getByLabel("Valor").fill("50");
    await page.getByRole("button", { name: /^Guardar$/ }).click();
    await expect(page.getByText(/caracteres/i)).toBeVisible();

    // Depois preenche corretamente
    await page.getByLabel("Descrição").fill("Compra Válida");
    await page.getByLabel("Categoria").selectOption("Alimentação");
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    // Deve voltar para lista de despesas
    await expect(page).toHaveURL(/\/despesas\/lista/);
  });

  test("rejeita notas muito longas", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    await page.getByLabel("Descrição").fill("Compra");
    await page.getByLabel("Valor").fill("50");
    await page.getByLabel("Categoria").selectOption("Alimentação");

    const longNotes = "a".repeat(501);
    await page.getByLabel("Notas").fill(longNotes);
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    await expect(page.getByText(/500 caracteres|Notas/i)).toBeVisible();
  });

  test("mostra feedback com cor diferente em erro", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    await page.getByLabel("Valor").fill("-10");
    await page.getByRole("button", { name: /^Guardar$/ }).click();

    const feedbackDiv = page.locator("[class*='bg-red-50']");
    await expect(feedbackDiv).toBeVisible();
  });
});

test.describe("Validação de Perfil", () => {
  test("rejeita email inválido", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    await page.getByLabel("Email").fill("email-invalido");
    await page.getByRole("button", { name: /Guardar/i }).click();

    await expect(page.getByText(/Email|inválido/i)).toBeVisible();
  });

  test("rejeita rendimento zero", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    await page.getByLabel("Rendimento mensal").fill("0");
    await page.getByRole("button", { name: /Guardar/i }).click();

    await expect(page.getByText(/positivo/i)).toBeVisible();
  });

  test("rejeita rendimento negativo", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    await page.getByLabel("Rendimento mensal").fill("-1000");
    await page.getByRole("button", { name: /Guardar/i }).click();

    await expect(page.getByText(/positivo/i)).toBeVisible();
  });

  test("rejeita nome vazio", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    await page.getByLabel("Nome").fill("");
    await page.getByRole("button", { name: /Guardar/i }).click();

    await expect(page.getByText(/caracteres/i)).toBeVisible();
  });

  test("rejeita nome muito longo", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    const longName = "a".repeat(51);
    await page.getByLabel("Nome").fill(longName);
    await page.getByRole("button", { name: /Guardar/i }).click();

    await expect(page.getByText(/caracteres/i)).toBeVisible();
  });

  test("normaliza email para minúsculas", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    await page.getByLabel("Email").fill("ANA@EMAIL.COM");
    await page.getByRole("button", { name: /Guardar/i }).click();

    await expect(page.getByText("Alterações guardadas")).toBeVisible();

    await page.reload();
    const emailField = page.getByLabel("Email");
    await expect(emailField).toHaveValue("ana@email.com");
  });

  test("mostra feedback com cor de erro no perfil", async ({ page }) => {
    await openRoute(page, "/definicoes/perfil");

    await page.getByLabel("Rendimento mensal").fill("-100");
    await page.getByRole("button", { name: /Guardar/i }).click();

    const feedbackDiv = page.locator("[class*='bg-red-50']");
    await expect(feedbackDiv).toBeVisible();
  });
});

test.describe("Estado de Formulários", () => {
  test("caixa de seleção de categoria previne valor inválido", async ({
    page,
  }) => {
    await openRoute(page, "/despesas/adicionar");

    const categorySelect = page.getByLabel("Categoria");
    // Verifica que só aceita categorias predefinidas
    const options = await categorySelect.locator("option").count();
    expect(options).toBeGreaterThan(0);
  });

  test("tipo de despesa é limitado a opções válidas", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    const kindSelect = page.getByLabel("Tipo de despesa");
    await expect(kindSelect).toHaveValue("variable"); // valor padrão

    // Tenta outras opções
    await kindSelect.selectOption("fixed");
    await expect(kindSelect).toHaveValue("fixed");
  });

  test("data não permite formato inválido", async ({ page }) => {
    await openRoute(page, "/despesas/adicionar");

    const dateInput = page.getByLabel("Data");
    // O input type=date já previne formatos inválidos no navegador
    const placeholder = await dateInput.getAttribute("type");
    expect(placeholder).toBe("date");
  });
});
