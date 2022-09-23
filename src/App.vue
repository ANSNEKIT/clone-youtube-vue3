<script setup lang="ts">
import { computed } from 'vue'

import TheCategories from './components/TheCategories.vue'
import TheVideos from './components/TheVideos.vue'
import LayoutDefault from './layouts/LayoutDefault.vue'

const layout = computed(() => LayoutDefault)
</script>

<template>
    <component :is="layout">
        <TheCategories />
        <TheVideos />
    </component>
</template>
