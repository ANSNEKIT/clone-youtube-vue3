<template>
    <AppTooltip :tooltip="tooltip">
        <button
            class="p-1 sm:px-1.5 sm:py-[1px] sm:w-[64px] w-[40px] h-full flex items-center justify-center hover:bg-neutral-200 border border-solid border-gray-300 rounded-l-none rounded-r bg-neutral-100 focus:bg-black/10"
            aria-label="Введите запрос"
        >
            <IconSearch class="w-[24px] h-[24px]" />
        </button>
    </AppTooltip>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
import AppTooltip from '@/components/base/AppTooltip.vue'

defineProps({
    tooltip: {
        type: String,
        default: '',
    },
})
</script>
