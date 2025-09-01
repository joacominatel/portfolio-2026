import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Joaquín Minatel Portfolio",
    short_name: "Minatel",
    description: "Backend developer portfolio – clear APIs, reliable data.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6d8bff",
    lang: "en",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" }
    ]
  };
}
