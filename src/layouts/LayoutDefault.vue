<template>
    <div id="layout-default">
        <TheHeader @toggle-sidebar="toggleSidebar" />
        <TheSidebar />
        <TheSidebarMini />
        <TheSidebarMobile :is-open="isOpenSidebarMobile" @close="isOpenSidebarMobile = false" />

        <slot />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

import TheHeader from '../components/TheHeader.vue'
import TheSidebarMini from '../components/TheSidebarMini.vue'
import TheSidebarMobile from '../components/TheSidebarMobile.vue'
import TheSidebar from '../components/TheSidebar.vue'
import { useStore } from 'vuex'

defineEmits(['toggleMobileSidebar', 'close'])

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const isOpenSidebarMobile = ref(false)
const md = 768
const xl = 1280

const getSidebarState = () => {
    if (window.innerWidth >= md && window.innerWidth < xl) {
        store.commit('setSidebarState', 'compact')
    }
    if (window.innerWidth >= xl) {
        store.commit('setSidebarState', 'normal')
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
        const sidebarNewState = sidebarState.value === 'normal' ? 'compact' : 'normal'
        store.commit('setSidebarState', sidebarNewState)
    } else {
        isOpenSidebarMobile.value = true
    }
}
</script>
