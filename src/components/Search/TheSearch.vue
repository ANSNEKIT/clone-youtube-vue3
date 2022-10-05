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
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { Keyword } from '@/types/searchInput'

const store = useStore()

const isShowResults = ref(false)
const query = ref('')
const queryBuffer = ref<string | null>(null)
const results = ref<Array<Keyword>>([])
const keywords = [
    {
        value: 'javascript',
        similar: '',
        keyword: 'javascript',
    },
    {
        value: 'javascript',
        similar: 'с нуля',
        keyword: 'javascript с нуля',
    },
    {
        value: 'javascript',
        similar: 'для начинающих',
        keyword: 'javascript для начинающих',
    },
    {
        value: 'javascript',
        similar: 'за 6 часов',
        keyword: 'javascript за 6 часов',
    },
    {
        value: 'javascript',
        similar: 'за 30 секунд',
        keyword: 'javascript за 30 секунд',
    },
    {
        value: 'javascript',
        similar: 'видеоуроки',
        keyword: 'javascript видеоуроки',
    },
    {
        value: 'javascript',
        similar: 'classes',
        keyword: 'javascript classes',
    },
    {
        value: 'javascript',
        similar: 'ninja',
        keyword: 'javascript ninja',
    },
    {
        value: 'javascript',
        similar: 'objects',
        keyword: 'javascript objects',
    },
    {
        value: 'javascript',
        similar: 'уроки',
        keyword: 'javascript уроки',
    },
    {
        value: 'javascript',
        similar: 'project',
        keyword: 'javascript project',
    },
    {
        value: 'javascript',
        similar: 'практика',
        keyword: 'javascript практика',
    },
    {
        value: 'javascript',
        similar: 'за час',
        keyword: 'javascript за час',
    },
    {
        value: 'javascript',
        similar: 'девид фленеган',
        keyword: 'javascript девид фленеган',
    },
]
const activeSearchResultId = ref<number | null>(null)

onMounted(() => {
    window.addEventListener('click', onClick)
})

onUnmounted(() => {
    window.removeEventListener('click', onClick)
})

watch(
    () => query.value,
    () => store.commit('setSearchQuery', query.value),
)
const onClick = () => toggleShowResults(false)

const onResultClick = () => {
    if (activeSearchResultId.value !== null) {
        query.value = results.value[activeSearchResultId.value].keyword
    }

    toggleShowResults(false)
    updateQueryResults()
}
const updateQueryResults = () => {
    activeSearchResultId.value = null
    queryBuffer.value = query.value

    if (query.value === '') {
        results.value = []
    } else {
        results.value = keywords
            .filter((key: Keyword) => {
                return key.keyword.includes(trimmedQuery())
            })
            .map((key: Keyword) => {
                return {
                    value: trimmedQuery(),
                    similar: key.keyword.slice(trimmedQuery().length),
                    keyword: key.keyword,
                }
            })
    }
}

const trimmedQuery = () => {
    return query.value.replace(/\s+/g, ' ').trim().toLowerCase()
}

const toggleShowResults = (hasFocusInput: boolean) => {
    isShowResults.value = hasFocusInput && results.value.length > 0
}

const updateQueryWithSearchResult = () => {
    if (activeSearchResultId.value !== null) {
        query.value = results.value[activeSearchResultId.value].keyword
    } else {
        query.value = String(queryBuffer.value)
    }
}

const makePrev = () => {
    if (activeSearchResultId.value === 0) {
        activeSearchResultId.value = null
    } else if (activeSearchResultId.value === null) {
        activeSearchResultId.value = results.value.length - 1
    } else {
        activeSearchResultId.value = Number(activeSearchResultId.value) - 1
    }
}
const makeNext = () => {
    if (activeSearchResultId.value === null) {
        activeSearchResultId.value = 0
    } else if (activeSearchResultId.value + 1 === results.value.length) {
        activeSearchResultId.value = null
    } else {
        activeSearchResultId.value = Number(activeSearchResultId.value) + 1
    }
}
const prevResult = () => {
    if (isShowResults.value) {
        makePrev()
        updateQueryWithSearchResult()
    } else {
        toggleShowResults(true)
    }
}
const nextResult = () => {
    if (isShowResults.value) {
        makeNext()
        updateQueryWithSearchResult()
    } else {
        toggleShowResults(true)
    }
}
</script>
