<template>
    <div id="search" class="group flex flex-1 justify-end">
        <TheSearchInput />
        <TheSearchButton tooltip="Введите запрос" />
    </div>
</template>

<script setup lang="ts">
import TheSearchInput from '@/components/Search/TheSearchInput.vue'
import TheSearchButton from '@/components/Search/TheSearchButton.vue'
</script>
