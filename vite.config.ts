import { defineConfig } from 'vite';
import { resolve } from 'path'; // 导入 path 模块，帮助我们解析路径
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [resolve(process.cwd(), 'src/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',

			/**
			 * 自定义插入位置
			 * @default: body-last
			 */
			// inject?: 'body-last' | 'body-first'

			/**
			 * custom dom id
			 * @default: __svg__icons__dom__
			 */
			// customDomId: '__svg__icons__dom__',
		}),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, 'src'),
			},
		],
	},
});
