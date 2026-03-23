import { queryKeys } from "@/config/routes.mjs";

export function getProfileParam(searchParams) {
  if (!searchParams) return null;

  return (
    searchParams.get(queryKeys.profile) ||
    searchParams.get(queryKeys.legacyProfile) ||
    null
  );
}

export function setProfileParam(searchParams, profile) {
  const params = new URLSearchParams(searchParams);

  params.delete(queryKeys.profile);
  params.delete(queryKeys.legacyProfile);

  if (profile) {
    params.set(queryKeys.profile, profile);
  }

  return params;
}

export function appendProfileToHref(href, profile) {
  if (!profile) return href;

  const [pathname, existingQuery = ""] = href.split("?");
  const params = new URLSearchParams(existingQuery);

  params.delete(queryKeys.legacyProfile);
  params.set(queryKeys.profile, profile);

  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}
