import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSingleFile() // This forces all JS and CSS to be inlined into the HTML
  ],
  base: './', // CRITICAL for Odoo: Makes paths relative so it works as an attachment
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000, // Large limit to ensure everything is inlined
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false, // Do not split CSS
    reportCompressedSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: undefined,
      },
    },
  },
});