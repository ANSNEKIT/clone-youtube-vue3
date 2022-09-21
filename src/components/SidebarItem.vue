<template>
    <li class="">
        <a
            href="#"
            class="flex items-center px-6 py-2.5 hover:bg-black/5 focus:bg-black/5 outline-0"
            :class="{
                'text-black bg-black/10 font-medium hover:bg-black/20 focus:bg-black/20': isActive,
            }"
        >
            <slot />

            <span
                class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap active:font-medium"
                >{{ name }}</span
            >
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
