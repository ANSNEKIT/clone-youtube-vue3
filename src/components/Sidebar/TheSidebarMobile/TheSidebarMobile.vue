<template>
    <Transition
        enter-active-class="transition-opacity ease-linear duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <AppShadow v-show="isOpen" @click="$emit('close')" />
    </Transition>
    <Transition
        enter-active-class="transition ease-in-out duration-200 transform"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-200 transform"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
    >
        <TheSidebar id="sidebar-mobile" :is-mobile-open="isOpen" @close="$emit('close')" />
    </Transition>
</template>

<script setup lang="ts">
import AppShadow from '@/components/base/AppShadow.vue'
import TheSidebar from '@/components/Sidebar/TheSidebar/TheSidebar.vue'

defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
})
defineEmits(['close'])
</script>
