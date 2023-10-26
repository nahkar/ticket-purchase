import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			dnd: '/src/utils/dnd',
			'~assets': path.resolve(__dirname, './src/assets'),
			'~components': path.resolve(__dirname, './src/components'),
			'~styles': path.resolve(__dirname, './src/styles'),
			'~pages': path.resolve(__dirname, './src/pages'),
			'~interfaces': path.resolve(__dirname, './src/interfaces'),
			'~layouts': path.resolve(__dirname, './src/layouts'),
		},
	},
});
