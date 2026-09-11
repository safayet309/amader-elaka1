import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",

  plugins: [react()],

  base: "/amader-elaka1/",

  build: {
    outDir: "../",
    emptyOutDir: false,
  },
});
