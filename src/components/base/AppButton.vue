<template>
    <AppTooltip :tooltip="tooltip">
        <button
            class="w-[40px] h-[40px] p-2 flex items-center justify-center rounded-full active:shadow-lg focus:bg-black/10"
            :class="btnClass"
        >
            <slot />
        </button>
    </AppTooltip>
</template>

<script setup lang="ts">
import AppTooltip from './AppTooltip.vue'

defineProps({
    tooltip: {
        type: String,
        default: '',
    },
    btnClass: {
        type: String,
        default: '',
    },
})
</script>
