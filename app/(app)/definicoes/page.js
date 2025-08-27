import { redirect } from "next/navigation";
import { routes } from "@/config/routes.mjs";

export default function SettingsIndex() {
  redirect(routes.definicoes.perfil);
}
