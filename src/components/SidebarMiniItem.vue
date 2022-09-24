<template>
    <li class="">
        <a
            :href="link"
            class="flex flex-col items-center pt-[16px] pb-4 text-[10px] leading-4 hover:bg-black/5 focus:bg-black/5"
        >
            <component :is="icon" width="24" height="24" class="w-[24px] h-[24px] mb-1.5 stroke-1" />

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
    icon: {
        type: Object,
        default: () => ({}),
    },
    link: {
        type: String,
        default: '#',
    },
})
</script>
