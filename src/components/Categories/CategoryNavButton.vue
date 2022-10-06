<template>
    <div class="h-full absolute z-30 top-0 flex" :class="{ 'flex-row-reverse': left }">
        <span
            class="block w-[50px]"
            :class="{ 'bg-gradient-to-l from-white': right, 'bg-gradient-to-r from-white': left }"
        ></span>
        <div class="w-[56px] flex items-center justify-center bg-white">
            <button
                class="w-[32px] h-[32px] p-1 rounded-full active:bg-black/10"
                @click="$emit('navButtonClick')"
            >
                <slot />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    right: {
        type: Boolean,
        default: false,
    },
    left: {
        type: Boolean,
        default: false,
    },
})
defineEmits(['navButtonClick'])
</script>
