<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheAside from './components/TheAside.vue'
import TheCategories from './components/TheCategories.vue'
import TheContent from './components/TheContent.vue'
import TheAsideMini from './components/TheAsideMini.vue'
</script>

<template>
    <div>
        <TheHeader />
        <TheAsideMini />
        <TheAside />
        <TheCategories />
        <TheContent />
    </div>
</template>

<style scoped></style>
