import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite"; // 1. Add this import
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tanstackStart(), 
    nitro({ preset: "vercel" }), // 2. Add the Nitro plugin with the vercel preset
    viteReact()
  ],
});
