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
import { onMounted, ref, computed, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import TheHeader from '@/components/Header/TheHeader.vue'
import TheSidebarMini from '@/components/Sidebar/TheSidebarMini/TheSidebarMini.vue'
import TheSidebarMobile from '@/components/Sidebar/TheSidebarMobile/TheSidebarMobile.vue'
import TheSidebar from '@/components/Sidebar/TheSidebar/TheSidebar.vue'
import { throttle } from '@/composables/throttle'

defineEmits(['toggleMobileSidebar', 'close'])

const store = useStore()
const sidebarState = computed(() => store.state.sidebarState)

const isOpenSidebarMobile = ref(false)
const md = 768
const xl = 1280

onMounted(() => {
    getSidebarState()

    window.addEventListener('resize', throttledGetSidebarState)
})
onUnmounted(() => window.removeEventListener('resize', throttledGetSidebarState))

const getSidebarState = () => {
    if (window.innerWidth >= md && window.innerWidth < xl) {
        store.commit('setSidebarState', 'compact')
    }
    if (window.innerWidth >= xl) {
        store.commit('setSidebarState', 'normal')
        isOpenSidebarMobile.value = false
    }
}
const throttledGetSidebarState = throttle(getSidebarState, 50)

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
