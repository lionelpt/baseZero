import { redirect } from "next/navigation";
import { routes } from "@/config/routes.mjs";

export default function Home() {
  redirect(routes.home);
}
