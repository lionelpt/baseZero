import { redirect } from "next/navigation";
import { routes } from "@/config/routes.mjs";
import { appendQuery } from "../redirect-utils";

export default function LegacyDespesasEditarPage({ searchParams }) {
  redirect(appendQuery(routes.despesas.editar, searchParams));
}
