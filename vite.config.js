// vite.config.js
const { resolve } = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: `assets/[name].js`,
      },
      input: {
        test: resolve(__dirname, "test.js"),
      },
    },
  },
  plugins: [react(), crx({ manifest })],
});
