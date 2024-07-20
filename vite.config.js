import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
    plugins: [
        vue(),

        VueDevTools({
            appendTo: 'app.js',
        }),

        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
