import  { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' //comes in built
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vitePluginRequire from 'vite-plugin-require';
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
    svgLoader({defaultImport: 'url'}),
    vitePluginRequire.default(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
        scss: { 
          additionalData:  
          `@use "@/assets/scss/global" as *;`
        },
    },
  },
optimizeDeps: {
  include: ["vuetify"],
},
build: {
  lib: {
    entry: resolve(__dirname, "src/main.ts"),
    name: "MyComponentLibrary",
    fileName: "ui-library",
  },
  rollupOptions: {
    exclude: ['@/stories', './storybook-static', './.storybook'],
    external: ['vue'],
    output: {
      globals: {
        vue: "Vue",
      }
    }
  },
},
});
