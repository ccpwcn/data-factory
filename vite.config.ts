import {defineConfig, loadEnv} from 'vite'
import {resolve} from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default (({mode}: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue()
    ],
    resolve: {
      // 配置别名路径
      alias: {
        // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
        "@": resolve(__dirname, "./src"),
        //便捷图片路径引用，注意：这里不能通过path模块解析路径的写法
        // "/images": "src/assets/images/",
      },
    },
    base: env.VITE_BASE_URL, // 打包基础路径 不配置打包后可能会找不到资源
    build: {
      outDir: "dist",
      sourcemap: mode === 'development'
    },
    server: {
      https: false, // 是否开启 https
      open: false, // 是否自动在浏览器打开
      port: 8002, // 端口号
      host: "0.0.0.0",
      proxy: {
        [env.VITE_API_URL]: {
          target: env.VITE_PROXY_TARGET, // 后台接口
          changeOrigin: true,
          secure: false, // 如果是https接口，需要配置这个参数
          // ws: true, //websocket支持
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    // 引入第三方的配置
    optimizeDeps: {
      include: [],
    },
  })
})
