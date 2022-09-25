<template>
    <button
        class="px-3 py-1 h-[32px] min-w-[50px] max-w-[15.5rem] text-base overflow-hidden text-ellipsis whitespace-nowrap border rounded-full bg-black/5 hover:bg-black/10 focus:bg-black/10"
        :class="{ '!bg-black !text-white': isActive }"
        @click="$emit('changeActiveCategory', id)"
    >
        {{ category }}
    </button>
</template>

<script setup lang="ts">
defineProps({
    id: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        default: '',
    },
})
defineEmits(['changeActiveCategory'])
</script>
