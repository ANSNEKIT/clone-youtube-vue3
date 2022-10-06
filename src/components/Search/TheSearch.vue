<template>
    <div id="search" class="group flex flex-1 justify-end">
        <div class="relative flex w-full">
            <TheSearchInput
                v-model:query="query"
                :has-results="!!results.length"
                @update:query="updateQueryResults"
                @change-state="toggleShowResults"
                @keyup.up="prevResult"
                @keyup.down="nextResult"
                @keydown.up.prevent
                @enter="onResultClick"
            />
            <TheSearchResults
                v-show="isShowResults"
                :results="results"
                :active-result-id="activeSearchResultId"
                @result-item-moseenter="activeSearchResultId = $event"
                @result-item-mouseleave="activeSearchResultId = null"
                @result-click="onResultClick"
            />
        </div>
        <TheSearchButton tooltip="Введите запрос" @click.stop="onResultClick" />
    </div>
</template>

<script setup lang="ts">
import TheSearchInput from '@/components/Search/TheSearchInput.vue'
import TheSearchButton from '@/components/Search/TheSearchButton.vue'
import TheSearchResults from '@/components/Search/TheSearchResults.vue'
import { onMounted, onUnmounted } from 'vue'
import { useSearch } from '@/composables/search'

const {
    query,
    activeSearchResultId,
    isShowResults,
    results,
    toggleShowResults,
    updateQueryResults,
    onResultClick,
    prevResult,
    nextResult,
} = useSearch()

onMounted(() => {
    window.addEventListener('click', onClick)
})

onUnmounted(() => {
    window.removeEventListener('click', onClick)
})

const onClick = () => toggleShowResults(false)
</script>
