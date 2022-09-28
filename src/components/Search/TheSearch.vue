<template>
    <div id="search" class="hidden group sm:flex flex-1 justify-end">
        <TheSearchInput />
        <TheSearchButton tooltip="Введите запрос" />
    </div>
</template>

<script setup lang="ts">
import TheSearchInput from '@/components/Search/TheSearchInput.vue'
import TheSearchButton from '@/components/Search/TheSearchButton.vue'
</script>
