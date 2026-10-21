import { defineConfig } from "vite";

export default defineConfig({
  // 使用相对路径，保证部署在 GitHub Pages 子目录下资源也能正确加载
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
