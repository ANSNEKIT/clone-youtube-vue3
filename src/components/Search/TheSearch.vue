<template>
    <div id="search" class="group flex flex-1 items-center justify-end">
        <TheSearchInput />
        <TheSearchButton />
    </div>
</template>

<script setup lang="ts">
import TheSearchInput from '@/components/Search/TheSearchInput.vue'
import TheSearchButton from '@/components/Search/TheSearchButton.vue'
</script>
