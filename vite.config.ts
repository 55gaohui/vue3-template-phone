import { UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression' //生成.gz文件
import autoprefixer from 'autoprefixer'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'
import postCssPxToRem from 'postcss-pxtorem'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }): UserConfig => {
  return {
    base: './',
    plugins: [
      vue(),
      //自动按需引入
      Components({
        dts: 'types/auto-imports-component.d.ts',
        resolvers: [ElementPlusResolver()]
      }),
      //自动vue API
      AutoImport({
        resolvers: [ElementPlusResolver(), VueHooksPlusResolver()],
        dts: 'types/auto-imports-api.d.ts', // 生成配置文件，如果是ts项目，通常我们会把声明文件放在根目录/types中，注意，这个文件夹需要先建好，否则可能导致等下无法往里生成auto-imports.d.ts文件
        imports: ['vue', 'vue-router', 'pinia'],
        eslintrc: {
          enabled: true // 默认false, true启用。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把enable关掉，即改成false。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
        }
      }),
      //mock配置
      viteMockServe({
        // ↓解析根目录下的mock文件夹
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command === 'serve'
      }),
      {
        ...viteCompression(),
        apply: 'build' //仅在build生成.gz文件
      }
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '#': path.join(__dirname, 'types')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx']
    },
    css: {
      // css预处理器 less全局变量配置
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/assets/styles/global-var.less";'
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%']
          }),
          postCssPxToRem({
            rootValue: 75, // 1rem，根据 设计稿宽度/10 进行设置
            minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
            propList: ['*'],
            selectorBlackList: ['.el-'], // 过滤掉.el-开头的class，不进行rem转换
            exclude: ['node_modules'] //主要是忽略掉element-plus的css变量
          }),
          {
            postcssPlugin: 'internal: charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8090,
      open: true,
      https: false
      // proxy: {
      //   '/api': {
      //     target: 'http://10.11.32.117:8080', //常文朋
      //     changeOrigin: true,
      //     ws: true,
      //     rewrite: (path: string) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    build: {
      rollupOptions: {
        output: {
          //插件手动分包
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router']
          },
          // js和css文件夹分离
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
