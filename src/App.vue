<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheCategories from './components/TheCategories.vue'
import TheVideos from './components/TheVideos.vue'
import TheSidebarMini from './components/TheSidebarMini.vue'
</script>

<template>
    <div>
        <TheHeader />
        <TheSidebarMini />
        <TheSidebar />
        <div class="hidden fixed inset-0 bg-black/50 z-20">
            <TheSidebar :is-mobile="true" />
        </div>
        <TheCategories />
        <TheVideos />
    </div>
</template>

<style scoped></style>
