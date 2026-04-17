import { redirect } from "next/navigation";
import { routes } from "@/config/routes.mjs";
import { appendQuery } from "../redirect-utils";

export default function LegacyDespesasAdicionarPage({ searchParams }) {
  redirect(appendQuery(routes.despesas.adicionar, searchParams));
}
