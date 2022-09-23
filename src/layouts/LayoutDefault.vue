<template>
    <div id="layout-default">
        <TheHeader @toggle-sidebar="toggleSidebar" />
        <TheSidebar :is-open="sidebarState === 'normal'" />
        <TheSidebarMini :is-open="sidebarState === 'compact'" />
        <TheSidebarMobile :is-open="isOpenSidebarMobile" @close="isOpenSidebarMobile = false" />

        <slot />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheSidebarMini from '../components/TheSidebarMini.vue'
import TheSidebarMobile from '../components/TheSidebarMobile.vue'
import TheSidebar from '../components/TheSidebar.vue'

defineEmits(['toggleMobileSidebar', 'close'])

const isOpenSidebarMobile = ref(false)
const sidebarState = ref<'normal' | 'compact' | null>(null)
const md = 768
const xl = 1280

const getSidebarState = () => {
    if (window.innerWidth >= md && window.innerWidth < xl) {
        sidebarState.value = 'compact'
    }
    if (window.innerWidth >= xl) {
        sidebarState.value = 'normal'
    }
}
const throttle = (cb: (...args: any[]) => void, timeout: number) => {
    let timer: null | ReturnType<typeof setTimeout> = null

    return function (...args: any[]) {
        if (timer) return

        timer = setTimeout(() => {
            cb(...args)

            if (timer) {
                clearTimeout(timer)
            }
            timer = null
        }, timeout)
    }
}

const throttledGetSidebarState = throttle(getSidebarState, 50)
onMounted(() => {
    getSidebarState()
})

addEventListener('resize', throttledGetSidebarState)

const toggleSidebar = () => {
    const browserWidth = window.innerWidth

    if (browserWidth >= xl) {
        sidebarState.value = sidebarState.value === 'normal' ? 'compact' : 'normal'
    } else {
        isOpenSidebarMobile.value = true
    }
}
</script>
