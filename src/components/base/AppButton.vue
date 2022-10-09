<template>
    <AppTooltip :tooltip="tooltip">
        <button
            class="w-[40px] h-[40px] p-2 flex shrink-0 items-center justify-center rounded-full active:shadow-lg focus:bg-black/10"
            :class="btnClass"
            @click="$emit('click', $event)"
            @mousedown.prevent
        >
            <slot />
        </button>
    </AppTooltip>
</template>

<script setup lang="ts">
import AppTooltip from '@/components/base/AppTooltip.vue'

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

defineEmits(['click'])
</script>
