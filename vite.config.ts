import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("react-router-dom") || id.includes("react-router")) {
            return "@react-router";
          }
          if (id.includes("lucide-react") || id.includes("lucide")) {
            return "@lucide-react";
          }
          if (id.includes("@radix-ui")) {
            return "@radix-ui";
          }
          if (id.includes("@tanstack")) {
            return "@tanstack";
          }
          if (id.includes("recharts")) {
            return "@recharts";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
