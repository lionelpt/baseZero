export const STORAGE_KEY = "cash-app-state-v1";

export async function resetAppState(page) {
  await page.goto("/visao/painel");
  await page.evaluate((storageKey) => {
    window.localStorage.removeItem(storageKey);
  }, STORAGE_KEY);
  await page.reload();
}

export async function openRoute(page, pathname, profileName) {
  const url = profileName
    ? `${pathname}?perfil=${encodeURIComponent(profileName)}`
    : pathname;

  await page.goto(url);
}
