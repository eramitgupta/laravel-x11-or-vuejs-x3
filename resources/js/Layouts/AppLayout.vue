<script setup>
import { Head } from '@inertiajs/vue3';
defineProps({
    title: {
        type: String,
        default: 'Home',
        required: false,
    },
});
</script>
<template>
    <Head :title="title" />
    <div>
        <slot />
    </div>
</template>
