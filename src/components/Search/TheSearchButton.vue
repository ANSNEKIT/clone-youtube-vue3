<template>
    <button
        class="p-1 sm:px-1.5 sm:py-[1px] sm:w-[64px] w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-neutral-200 sm:border sm:border-solid sm:border-gray-300 sm:rounded-l-none sm:rounded-r sm:bg-neutral-100 focus:bg-black/10"
        aria-label="Введите запрос"
    >
        <IconSearch class="w-[24px] h-[24px]" />
    </button>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
</script>
