import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
