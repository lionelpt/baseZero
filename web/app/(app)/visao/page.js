import { redirect } from "next/navigation";
import { routes } from "@/config/routes.mjs";

export default function VisionIndex() {
  redirect(routes.visao.painel);
}
