<template>
    <li class="">
        <a
            href="#"
            class="h-[40px] flex items-center px-4 text-base hover:bg-neutral-100 active:bg-neutral-300"
        >
            <slot />

            <div class="flex flex-1">
                <span class="overflow-hidden overflow-ellipsis whitespace-nowrap">{{ label }}</span>
                <span class="pl-1 overflow-hidden overflow-ellipsis whitespace-nowrap text-base">{{
                    labelValue
                }}</span>
            </div>

            <IconArrowRight v-if="isArrowRight" width="24" height="24" class="w-[24px] h-[24px]" />
        </a>
    </li>
</template>

<script setup lang="ts">
import IconArrowRight from './icons/IconArrowRight.vue'
defineProps({
    label: {
        type: String,
        default: '',
    },
    labelValue: {
        type: String,
        default: '',
    },
    isArrowRight: {
        type: Boolean,
        default: false,
    },
})
</script>
