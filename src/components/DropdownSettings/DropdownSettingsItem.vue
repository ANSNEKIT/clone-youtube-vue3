<template>
    <li class="">
        <a
            :href="link"
            class="h-[40px] flex items-center px-4 text-base hover:bg-neutral-100 active:bg-neutral-300"
        >
            <component
                :is="icon"
                v-if="Object.keys(icon).length !== 0 && !isActive"
                width="24"
                height="24"
                class="w-[24px] h-[24px] mr-[16px]"
            />

            <IconCheck v-if="isActive" width="24" height="24" class="w-[24px] h-[24px] mr-[16px]" />

            <div
                class="flex flex-1 truncate"
                :class="{ 'ml-[40px]': !isActive && Object.keys(icon).length === 0 }"
            >
                <span class="truncate">{{ label }}</span>
                <span class="pl-1 truncate">{{ labelValue }}</span>
            </div>

            <IconArrowRight v-if="isArrowRight" width="24" height="24" class="w-[24px] h-[24px]" />
        </a>
    </li>
</template>

<script setup lang="ts">
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconCheck from '@/components/icons/IconCheck.vue'

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
    icon: {
        type: Object,
        default: () => ({}),
    },
    link: {
        type: String,
        default: '#',
    },
    isActive: {
        type: Boolean,
        default: false,
    },
})
</script>
