<template>
    <section class="w-[240px] py-2 border-b border-b-black/10">
        <h3
            v-if="title"
            class="py-2 px-6 text-[#606060] uppercase text-base leading-5 font-medium tracking-[0.5px]"
        >
            {{ title }}
        </h3>
        <slot />
    </section>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '',
    },
})
</script>
