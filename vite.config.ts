import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const teamImageHash = createHash("sha256");
for (const fileName of ["abotaleb.jpg", "ranaw.jpg", "osamam.jpg"]) {
  teamImageHash.update(readFileSync(new URL(`./public/images/${fileName}`, import.meta.url)));
}
const teamImageVersion = teamImageHash.digest("hex").slice(0, 12);

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/",
  define: {
    "import.meta.env.VITE_TEAM_IMAGE_VERSION": JSON.stringify(teamImageVersion),
  },
});