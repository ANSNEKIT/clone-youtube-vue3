<template>
    <li class="">
        <a
            :href="link"
            class="h-[40px] flex items-center px-4 text-base hover:bg-neutral-100 active:bg-neutral-300"
        >
            <component :is="icon" width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />

            <span class="mr-6 overflow-hidden overflow-ellipsis whitespace-nowrap">{{
                label
            }}</span>
        </a>
    </li>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        default: '',
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
