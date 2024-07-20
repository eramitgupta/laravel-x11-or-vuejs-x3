import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link, router } from '@inertiajs/vue3';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import AppLayout from './Layouts/AppLayout.vue';

// Fix for browser back button causing stale pages
let stale = false;
window.addEventListener('popstate', () => (stale = true));
router.on('navigate', event => {
    if (stale) {
        router.get(
            event.detail.page.url,
            {},
            { replace: true, preserveState: false }
        );
        stale = false;
    }
});

createInertiaApp({
    title: title => `${title}`,

    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        return pages[`./Pages/${name}.vue`];
    },

    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || AppLayout;
        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                },
            })
            .use(ZiggyVue)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el);
    },
    progress: {
        color: '#fff',
        includeCSS: true,
    },
});
