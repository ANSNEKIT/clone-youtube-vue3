<template>
    <div
        class="fixed inset-0 bg-black z-20"
        :class="[`opacity-${opacity}`]"
        data-testid="app-shadow"
    ></div>
</template>

<script setup lang="ts">
defineProps({
    opacity: {
        type: Number,
        default: 50,
    },
})
</script>
