import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/portfolio/home";

export const Route = createFileRoute("/")({ component: HomePage });
