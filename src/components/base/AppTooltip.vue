<template>
    <div class="relative">
        <div
            class="flex items-center h-full"
            @mouseenter="isShow = true"
            @mouseleave="isShow = false"
            @click="isShow = false"
        >
            <slot />
        </div>

        <Transition
            enter-active-class="ease-linear duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-linear duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-show="tooltip && isShow"
                class="p-2 absolute z-10 bg-neutral-600 opacity-80 rounded-sm text-white text-sm whitespace-nowrap"
                :class="getPositionClasses"
            >
                {{ tooltip }}
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
    tooltip: {
        type: String,
        default: '',
    },
    top: {
        type: Boolean,
        default: false,
    },
    right: {
        type: Boolean,
        default: false,
    },
    left: {
        type: Boolean,
        default: false,
    },
})

const isShow = ref(false)
const getPositionClasses = computed(() => {
    const topClasses = props.top ? 'bottom-10' : 'top-14'

    if (props.right) {
        return [topClasses, 'left-0']
    }

    if (props.left) {
        return [topClasses, 'right-0']
    }

    return [topClasses, 'left-1/2', '-translate-x-1/2']
})
</script>
