import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.d.ts", // 自動生成型別檔
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ["src/components"], // 指定掃描的元件資料夾
      extensions: ["vue"],
      deep: true, // 是否遞迴讀取子資料夾
      dts: "src/components.d.ts", // 自動產生型別檔
      resolvers: [ElementPlusResolver()],
    }),
    Pages(),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
