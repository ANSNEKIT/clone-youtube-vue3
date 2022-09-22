<template>
    <li class="">
        <a
            href="#"
            class="flex flex-col items-center pt-[16px] pb-4 text-[10px] leading-4 hover:bg-black/5 focus:bg-black/5"
        >
            <slot />

            <span class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">{{
                name
            }}</span>
        </a>
    </li>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: false,
    },
})
</script>
