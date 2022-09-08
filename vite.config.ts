import { defineConfig } from 'vite'
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv: configEnv }), new TypeScriptLinter()],
    }),
    vue()
  ]
}))
