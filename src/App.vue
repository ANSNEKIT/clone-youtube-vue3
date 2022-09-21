<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheAside from './components/TheAside.vue'
import TheCategories from './components/TheCategories.vue'
import TheVideos from './components/TheVideos.vue'
import TheAsideMini from './components/TheAsideMini.vue'
</script>

<template>
    <div>
        <TheHeader />
        <TheAsideMini />
        <TheAside />
        <div class="hidden fixed inset-0 bg-black/50 z-20">
            <TheAside :is-mobile="true" />
        </div>
        <TheCategories />
        <TheVideos />
    </div>
</template>

<style scoped></style>
