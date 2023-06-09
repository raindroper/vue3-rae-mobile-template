import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router'],
			resolvers: [
				VantResolver(),
			],
			dts: 'src/auto-import.d.ts',
		}),
		Components({
			resolvers: [VantResolver()],
		})],
});
