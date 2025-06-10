import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { buildConfig } from './config.build.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    chunkSizeWarningLimit: 1000,
  },
});
