import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Joaquín Minatel Portfolio",
    short_name: "Minatel",
    description:
      "Backends to production in days. Secure APIs, Postgres and deploys.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6d8bff",
    lang: "en",
  };
}
